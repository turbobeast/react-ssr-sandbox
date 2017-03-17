const express = require('express')
const path = require('path')

const app = express()
const port = 8080

app.use('/static', express.static(path.join(__dirname, 'build', 'static')))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`app is listening on port ${port}`)
})
