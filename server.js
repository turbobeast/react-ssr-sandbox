require('babel-register')({
  extensions: ['.js'],
  presets: ['es2015'],
})
require('ignore-styles')
const express = require('express')
const LRU = require('lru-cache')
const { createElement } = require('react')
const { StaticRouter } = require('react-router')
const { Provider } = require('react-redux')
const { renderToString } = require('react-dom/server')

const { htmlTemplate } = require('./src/index.html.js')
const manifest = require('./build/manifest.json')
const App = require('./src/components/app/app').default
const storeFactory = require('./src/store').default

const app = express()
const cache = LRU({
  max: 11,
  maxAge: 3600000,
})

function bootstrapApp(location, store, agent) {
  const context = {}
  const appEntry = createElement(
    Provider, { store }, createElement(
      StaticRouter, { location, context }, createElement(
        App, { radiumConfig: { userAgent: agent } })))
  const appHTML = renderToString(appEntry)
  return { appHTML, context }
}

function checkCache(request, response, next) {
  if (cache.has(request.url)) {
    response.send(cache.get(request.url))
    return
  }

  next()
}

function handleSSRRequest(request, response) {
  const store = storeFactory()
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (!state.robotData.isPending) {
      unsubscribe()
      const { appHTML } = bootstrapApp(request.url, store, request.headers['user-agent'])
      const htmlResponse = htmlTemplate({
        jsPath: manifest['main.js'],
        cssPath: manifest['main.css'],
        preloadChunks: [manifest['profile.js']],
        appHTML,
        state,
      })
      response.send(htmlResponse)
      cache.set(request.url, htmlResponse)
    }
  })

  const { context } = bootstrapApp(request.url, store, request.headers['user-agent'])
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
