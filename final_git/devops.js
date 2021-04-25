const express = require('express')
const app = express()
const port = 5005

app.get('/', (req, res) => {
  res.send('Penpenny Rocks')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
