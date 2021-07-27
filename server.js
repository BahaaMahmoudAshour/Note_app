const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Fuck you.......')
  })
  
  app.listen(3000, () => {
    console.log(`Server start......`)
  })