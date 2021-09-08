const express = require('express')
const router = express.Router()
const Tarefa = require('../models/tarefas')

//criacao de tarefas
router.post('/add', async (req, res) => {
    if (validaAuthAPI(req.headers['key'])) {
        await Tarefa.create(req.body)
            .then(() => {
                res.status(200).send('Tarefa adicionada com sucesso')
            })
            .catch((err) => {
                res.status(400).send(
                    'Algo errado com a tarefa, tente novamente'
                )
                console.error(err)
            })
    } else {
        res.status(403).end()
    }
})

// leitura de todas as tarefas
router.get('/', async (req, res) => {
    if (validaAuthAPI(req.headers['key'])) {
        await Tarefa.find({})
            .then((tarefa) => {
                res.status(200).send(tarefa)
            })
            .catch((err) => {
                res.status(400).send(
                    'Algo errado com a tarefa, tente novamente'
                )
                console.log(err)
            })
    } else {
        res.status(403).end()
    }
})

// leitura por id
router.get('/findById/:id', async (req, res) => {
    await Tarefa.find({ _id: req.params.id })
        .then((tarefa) => {
            res.status(200).send(tarefa)
        })
        .catch((err) => {
            res.status(400).send('Algo errado com a tarefa, tente novamente')
            console.log(err)
        })
})

// leitura por nome
router.get('/findByName/:name', async (req, res) => {
    await Tarefa.find({ nome: req.params.name })
        .then((tarefa) => {
            res.status(200).send(tarefa)
        })
        .catch((err) => {
            res.status(400).send('Algo errado com a tarefa, tente novamente')
            console.log(err)
        })
})

// edicao de tarefas
router.put('/update/:id', async (req, res) => {
    await Tarefa.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send('Atualizado com sucesso')
        })
        .catch((err) => {
            res.status(400).send('Algo errado com a tarefa, tente novamente')
            console.log(err)
        })
})

// deletar tarefas
router.delete('/delete/:id', async (req, res) => {
    await Tarefa.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send('Deletado com sucesso')
        })
        .catch((err) => {
            res.status(400).send('Algo errado com a tarefa, tente novamente')
            console.log(err)
        })
})

module.exports = router
