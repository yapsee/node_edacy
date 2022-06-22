const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    username: {type: String},
    password: { type: String},
    role: { type: String}
    });

const model = mongoose.model('user', userschema);
module.exports = model;
