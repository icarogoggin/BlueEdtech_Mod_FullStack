const express = require('express');
const app = express();

const port = 3000;

const filmes = [
    'Um Sonho de Liberdade',
    'O Poderoso Chefão',
    'Batman: O Cavaleiro das Trevas'
];

app.get('/',(req, res) => {
    res.send("Sejam bem vindos! Veja a lista de filmes");
});

app.get('/filmes',(req, res) => {
    res.send(filmes);
});

app.get('/filmes/:id', (req, res) => {
    const id = req.params.id -1;
    const filme = filmes[id];
    res.send(filme);
});

app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});