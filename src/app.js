const express = require('express')
const json = express.json
const Router = express.Router
const getSwords = require('./services/index.js')

const app = express()
app.use(json())
const apiRoute = Router()
app.use("/desafio-alest", apiRoute)
  
apiRoute.get('/ping', (req,res) => res.send('Hello World'))

apiRoute.get('/swords', async (req,res) => {
    const dados = await getSwords()
    console.log(dados)
    res.send(dados)})
//apiRoute.post('/swords', (req,res) => res.send('Hello World'))
//apiRoute.delete('/swords', (req,res) => res.send('Hello World'))
//apiRoute.update('/swords', (req,res) => res.send('Hello World'))




module.exports = app