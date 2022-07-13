const express = require('express')
const cors = require('cors');
const app = express()
const port = 80

app.use(cors());

app.get('/', (req, res) => {
  res.send({message: 'Hello World!'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})