require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015'],
})
require('ignore-styles')
const express = require('express')
const { createElement } = require('react')
const { StaticRouter } = require('react-router')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')

const { htmlTemplate } = require('./src/index.html.js')
const manifest = require('./build/manifest.json')
const App = require('./src/components/app/app').default
const storeFactory = require('./src/store').default

const app = express()
const htmlCache = {}

function makeCacheObject (html, expires = 3600000) {
  return {
    html,
    expires,
    createdAt: Date.now(),
  }
}

function isFresh (cacheObj) {
  return (Date.now() - cacheObj.createdAt) < cacheObj.expires
}

function bootstrapApp(location, store) {
  const context = {}
  const appEntry = createElement(
    Provider, { store }, createElement(
      StaticRouter, { location, context }, createElement(
        App)))

  const appHTML = renderToString(appEntry)
  return { appHTML, context }
}

function checkCache(request, response, next) {
  if (htmlCache[request.url] && isFresh(htmlCache[request.url])) {
    response.send(htmlCache[request.url].html)
    return
  }

  next()
}

function handleSSRRequest (request, response) {
  const store = storeFactory()
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (!state.robotData.isPending) {
      unsubscribe()
      const { appHTML } = bootstrapApp(request.url, store)
      const htmlResponse = htmlTemplate({
        jsPath: manifest['main.js'],
        cssPath: manifest['main.css'],
        appHTML,
        state,
      })
      response.send(htmlResponse)
      htmlCache[request.url] = makeCacheObject(htmlResponse)
    }
  })

  const { context } = bootstrapApp(request.url, store)
  if (context.url) {
    response.redirect(context.url)
    unsubscribe()
    return
  }
  store.dispatch({ type: 'INIT_SSR' })
}

app.use('/static', express.static('./build/static'))
app.use(checkCache)
app.use(handleSSRRequest)

app.listen(8080)
