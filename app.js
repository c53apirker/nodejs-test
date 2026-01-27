const request = require('sync-request')
const express = require('express')
const app = express()

let port = 3001

const { exec } = require('node:child_process');

app.use(express.raw({ type: '*/*', limit: '10mb' }));

app.post('/*', (req, res) => {  
  console.log('New POST (post-redirect) request received') 
  console.log(req.originalUrl)

  
  //works!
  res.redirect(301, `http://localhost/`)
})

app.get('/*', (req, res) => {  
  console.log(req.originalUrl)

  const s="myjeoptj!233!#"
  const token="myjeoptj!233!#"

  console.log(global)

  //works!
  res.send(200, `you leak the response!!!`)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})