const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! <h1>sdkfjaksjdf</h1>')
})

app.get('/home', (req, res) => {
    res.send('I am home kid')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 