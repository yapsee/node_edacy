const mongoose = require('mongoose');

const productsschema = new mongoose.Schema({
    name: {type: String},
    manufacturer: { type: String},

});
module.exports = mongoose.model('product', productsschema);