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

app.get('/:nome', function (req, res) {
    comidas.find({"name":req.params.nome}).then((comida) =>{
        res.send(comida)
    });
});

app.get('/adicionar/:nome/:categoria', function (req, res) {
    var nome= req.params.nome
    var categoria= req.params.categoria
    const food = new comidas({ 
        name: nome,
        categoria: categoria,
    });
    food.save().then(() => console.log('ta pronto chefia'));
    res.send(food);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});