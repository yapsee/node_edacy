const mongoose = require('mongoose');

const reservationsschema = new mongoose.Schema({
    clientId: {type: String},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
    count: {type: Number},
    amount: {type: Number}

},{timestamps: true});

const  model = mongoose.model('reservation', reservationsschema);
module.exports = model;