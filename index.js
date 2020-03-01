const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/primeiraApi', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("conectou no banco")
}).catch(function(){
    console.log("nao foi possivel conectar no banco")
})

var express = require('express');

var app = express();

app.use(express.json())

const routes = require("./rotas")

app.use(routes)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});