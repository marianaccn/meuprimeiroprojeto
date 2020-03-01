const mongoose = require('mongoose');

const comidas = mongoose.model('comidas', { 
    name: String,
    categoria: String,
});

module.exports = comidas