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

app.use('*/static', express.static(path.join(__dirname, 'build', 'static')))
app.use((req, res) => {
  const store = storeFactory()
  const appEntry = createElement(
      Provider, { store }, createElement(
        StaticRouter, { location: req.url, context: {} }, createElement(
          Route, { component: App })))

  const renderedApp = renderToString(appEntry)

  const html = htmlTemplate({
    cssPath: manifest['main.css'],
    jsPath: manifest['main.js'],
    appHTML: renderedApp,
  })

  res.send(html)
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
