const express =  require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
var noteRoute =require ('./route/noteRoute')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/', (req, res) => {
    res.send('Fuck you.......')
  })

  app.use('/api/v1' , noteRoute)

  app.listen(3000, () => {
    console.log(`Server start......`)
  })