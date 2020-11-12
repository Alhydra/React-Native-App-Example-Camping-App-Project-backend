const express = require('express')
const app = express()
const port = 3000

const discoverItems = require ("./src/discoverItems")
const Destinations = require ("./src/Destinations")



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.static('public'))

app.get('/discover', (req,res) => res.send(discoverItems))
app.get('/destinations', (req,res) => res.send(Destinations))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})