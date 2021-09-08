const express = require('express')
const app = express()
app.use(express.json())

const Conn = require('./models/conn/conn')

Conn('localhost', 27017, 'tarefas')

const port = 3000

const tarefasRouter = require('./routers/tarefas.routes')
app.use('/tarefas', tarefasRouter)

const usersRouter = require('./routers/users.routes')
app.use('/user', usersRouter)

app.listen(process.env.PORT || port, () => {
    console.info(`Servidor rodando na porta ${port}`)
})
