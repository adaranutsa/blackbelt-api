const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.BB_API_PORT

app.use(cors());

app.get('/', (req, res) => {
  res.send({message: 'Deployment Successful!'});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})