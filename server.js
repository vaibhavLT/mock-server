const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check', (req, res) => {
  res.status(401).send('Unauthorized')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})