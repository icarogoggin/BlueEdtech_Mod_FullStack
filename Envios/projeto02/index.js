const express = require('express');
const app = express();

const port = 3000;

const games = [
    'Skyrim',
    'Ragnarok',
    'Civilization',
    'Hitman',
    'The last of us',
];

const msgInicio = [
    'Bem vindo',
    'Ola amigo, bem vindo ao servidor',
    'Servidor de jogos',
    'Este é meu servidor',
];

function randomMinMax(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function frase(num){
    return msgInicio[num];
}

const msg = "teste"
//GET / home
app.get('/',(req, res) => {
    res.send(`<h1>${frase(randomMinMax(0,msgInicio.length))}</h1>`);
});

games.forEach(function (item, indice){
    console.log(item, indice);
});

app.get('/games/:id', (req, res) => {
    const id = req.params.id;
    const game = games[id-1];
    if (id > games.length || id < 1){
        res.send("ID invalido, tente novamente");
    }else {
        res.send(game);
    }
});

app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});