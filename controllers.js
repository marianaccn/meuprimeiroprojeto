const comidas = require("./model")

function CriarProduto(req,res){
    var nome = req.body.nome
    var categoria = req.body.categoria
    const food = new comidas({ 
        name: nome,
        categoria: categoria,
    });
    return food.save().then((resposta) => res.send(resposta));
}

function LerProduto(req,res){
    return comidas.find({"name":req.params.nome}).then((comida) =>{
        res.send(comida)
    });
}

function EditarProduto(req,res){
    var nome = req.body.nome
    var categoria = req.body.categoria
    return comidas.update({"name":nome}, {"categoria":categoria}).then((comida) =>{
        res.send(comida)
    });
}

function ExcluirProduto(req,res){
    return comidas.deleteOne({"name":req.params.nome}).then((comida) =>{
        res.send(comida)
    });
}

function ListaProdutos(req,res){
    return comidas.find({}).then((comidas) =>{
        res.send(comidas)
    });
}   

module.exports = {CriarProduto, LerProduto, EditarProduto, ExcluirProduto, ListaProdutos}
