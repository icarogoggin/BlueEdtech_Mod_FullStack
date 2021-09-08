const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    nome: { type: String, required: true },
    user: { type: String, required: true },
    pass: { type: String, required: true },
    key: { type: String },
    dataCriacao: { type: Date, default: Date.now },
})

const User = mongoose.model('usuarios', userModel)

module.exports = User
