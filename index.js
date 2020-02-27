const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/primeiraApi', {useNewUrlParser: true, useUnifiedTopology: true})
.then(function(){
    console.log("conectou no banco")
}).catch(function(){
    console.log("nao foi possivel conectar no banco")
})

const comidas = mongoose.model('comidas', { 
    name: String,
    categoria: String,
});

var express = require('express');

var app = express();

app.get('/', function (req, res) {
    const food = new comidas({ 
        name: 'Coxinha',
        categoria: "salgado",
    });
    food.save().then(() => console.log('ta pronto chefia'));
    res.send(food);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});