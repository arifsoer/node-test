const express = require('express')
const app = express()

const converter = require('./converter')

app.get('/rgbToHex', function(req, res) {
  const {red, green, blue} = req.query
  const hex = converter.rgbToHex(parseInt(red, 10), parseInt(green, 10), parseInt(blue, 10))
  res.send(hex)
})

app.get('/hexToRgb', function(req, res) {
  const { hex } = req.query
  const rgb = converter.hexToRgb(hex)
  res.send(rgb)
})

app.listen(3000)