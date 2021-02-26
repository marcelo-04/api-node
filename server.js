const express = require('express')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

const app = express()
let port = 3000

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})

mongoose.connect("mongodb+srv://api-node:!123456@cluster0.g6egn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
})

app.use(bodyParser.json())

const users = {

}
// users["MARCELO"] = {idade: 25, cidade: "SP"}

app.use('/', require('./src/routes.js'))