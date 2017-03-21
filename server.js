require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015'],
})
require('ignore-styles')

const express = require('express')
const path = require('path')
const { createElement } = require('react')
const { StaticRouter, Route } = require('react-router')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')
const manifest = require('./build/manifest.json')
const { htmlTemplate } = require('./src/index.html.js')

const App = require('./src/components/app/app').default
const storeFactory = require('./src/store').default

const app = express()
const port = 8080
const htmlCache = {}

function makeCacheObject(html, expires = 60000) {
  return {
    html,
    expires,
    createdAt: Date.now(),
  }
}

function isFresh(cacheObj) {
  return (Date.now() - cacheObj.createdAt) < cacheObj.expires
}

function checkCache(req, res, next) {
  const cachedObj = htmlCache[req.url]
  if (cachedObj && isFresh(cachedObj)) {
    res.send(cachedObj.html)
    return
  }

  next()
}

function bootstrapReactApp(location, store, userAgent) {
  const appEntry = createElement(
    Provider, { store }, createElement(
      StaticRouter, { location, context: {} }, createElement(
        Route, {}, createElement(
          App, { radiumConfig: { userAgent } }))))

  return renderToString(appEntry)
}

function handleSSRRequest(req, res) {
  const store = storeFactory()
  const userAgent = req.headers['user-agent']
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (!state.robotData.isPending) {
      unsubscribe()
      const renderedApp = bootstrapReactApp(req.url, store, userAgent)
      const chunks = [manifest['profile.js']]
      const html = htmlTemplate({
        cssPath: manifest['main.css'],
        jsPath: manifest['main.js'],
        preloadChunks: chunks,
        appHTML: renderedApp,
        state,
      })
      htmlCache[req.url] = makeCacheObject(html)
      res.send(html)
    }
  })

  bootstrapReactApp(req.url, store, userAgent)
  store.dispatch({ type: 'INIT_SSR' })
}

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')))
app.use(checkCache)
app.use(handleSSRRequest)

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
