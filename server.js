const fs = require("fs");
const https = require("https");

const express = require('express')
const app = express()
const port = 3003


const key = fs.readFileSync("localhost-key.pem", "utf-8");
const cert = fs.readFileSync("localhost.pem", "utf-8");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/check', (req, res) => {
  res.status(401).send('Unauthorized')
})

app.post('/mockfail', (req, res) => {
  res.status(401).send('Unauthorized')
})

https.createServer({ key, cert }, app).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})