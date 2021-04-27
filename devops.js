const express = require('express')
const app = express()
const port = 5010

app.get('/', (req, res) => {
  res.send('This one is really automated!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
