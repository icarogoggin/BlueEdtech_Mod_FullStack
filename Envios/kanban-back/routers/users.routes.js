const express = require('express')
const router = express.Router()
const User = require('../models/user')
const validaAuthAPI = require('../controllers/api.controller')

router.post('/add', async (req, res) => {
    if (validaAuthAPI(req.headers['key'])) {
        await User.create(req.body)
            .then(() => {
                res.status(200).send('User adicionada com sucesso')
            })
            .catch((err) => {
                res.status(400).send('Algo errado com o user, tente novamente')
                console.error(err)
            })
    } else {
        res.status(403).end()
    }
})

router.get('/findById/:id', async (req, res) => {
    await User.find({ _id: req.params.id })
        .then((musica) => {
            res.status(200).send(musica)
        })
        .catch((err) => {
            res.status(400).send('Algo errado com o user, tente novamente')
            console.log(err)
        })
})

router.get('/findByName/:name', async (req, res) => {
    await User.find({ nome: req.params.name })
        .then((musica) => {
            res.status(200).send(musica)
        })
        .catch((err) => {
            res.status(400).send('Algo errado com o user, tente novamente')
            console.log(err)
        })
})

router.put('/update/:id', async (req, res) => {
    await User.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send('Atualizado com sucesso')
        })
        .catch((err) => {
            res.status(400).send('Algo errado com o user, tente novamente')
            console.log(err)
        })
})

router.delete('/delete/:id', async (req, res) => {
    await User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send('Deletado com sucesso')
        })
        .catch((err) => {
            res.status(400).send('Algo errado com o user, tente novamente')
            console.log(err)
        })
})

module.exports = router
