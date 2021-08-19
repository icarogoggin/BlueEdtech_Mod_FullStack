const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

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

app.post('/games', (req, res) => {
    const game = req.body.game;
    const id = games.length;
    games.push(game);

    res.send(`O game foi adicionado com sucesso! ${game} foi cadastrado com o ID ${id}`)
})

app.put('/games/:id', (req, res)=> {
    const id = req.params.id -1;
    const game = req.body.game;
    games[id] = game;
    res.send(`${game} foi atualizado com sucesso!`)
})

app.delete('/games/:id', (req, res) => {
    const id = req.params.id -1;
    const game = game[id];
    if(!game) {
        res.send('Game não encontrado');
    }
    delete games[id];
    res.send('Game escluido com sucesso');
})

app.delete('/filmesSlice/:id', (req, res) =>{
    const id = req.params.id -1;
    games.splice(id,1)
    res.send('O game foi excluido com sucesso.')
})



app.listen(port, () => {
    console.info(`App esta rodando em: http://localhost:${port}/`);
});
