const express = require('express'); 
const app = express();

const port = 3000;

app.use(express.json());

const filmes = [
    "Capitão America: Oprimeiro vingador",
    "Capitã Marvel",
    "O incrivel Hulk",
    "Homem de Ferro",
    "Homem de Ferro 2",
];

app.get('/', (req, res)=> {
    res.send('Hello, Bluemer!');
})

app.get('/filmes', (req, res)=> {
    res.send(filmes);
})

app.get('/filmes/:id', (req, res)=> {
    const id = req.params.id - 1;

    const filme = filme[id];

    if(!filme) {
        res.send('Filme não encontrado');
    }

    res.send(filme);
})

app.post('/filmes', (req, res) => {
    const filme = req.body.filme;
    const id = filmes.length;
    filmes.push(filme);

    res.send(`Filme adicionado com sucesso: ${filme}
    O ID do filme é ${id}`)
})

app.listen(port, function(){
    console.info(`App rodando na porta http://localhost:${port}`)
})
