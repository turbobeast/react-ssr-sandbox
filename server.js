const express = require('express')
const path = require('path')
const manifest = require('./build/manifest.json')
const { htmlTemplate } = require('./src/index.html.js')

const app = express()
const port = 8080

app.use('/static', express.static(path.join(__dirname, 'build', 'static')))
app.use((req, res) => {
  res.send(htmlTemplate({ cssPath: manifest['main.css'], jsPath: manifest['main.js'] }))
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
