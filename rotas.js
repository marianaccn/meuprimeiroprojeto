const controller = require("./controllers")

var express = require('express');
var router = express.Router();

router.post('/', controller.CriarProduto)

router.get('/:nome', controller.LerProduto)

router.patch('/', controller.EditarProduto)

router.delete('/:nome', controller.ExcluirProduto)

module.exports = router