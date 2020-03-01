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

app.use(express.json())

app.post('/', function (req, res) {
    var nome = req.body.nome
    var categoria = req.body.categoria
    const food = new comidas({ 
        name: nome,
        categoria: categoria,
    });
    food.save().then((resposta) => res.send(resposta)); 
});

app.get('/:nome', function (req, res) {
    comidas.find({"name":req.params.nome}).then((comida) =>{
        res.send(comida)
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});