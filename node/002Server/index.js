const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const produtos = require('./produtos');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get(`/${produtos.colecao}`, (req, res) => {
    res.send(produtos.lista());
});

app.get(`/${produtos.colecao}/:id`, (req, res) => {
    res.send(produtos.porId(req.params.id));
});


app.post(`/${produtos.colecao}`, (req, res) => {
    res.send(produtos.adiciona({ id: null, nome: req.body.nome }));
});

app.put(`/${produtos.colecao}/:id`, (req, res) => {
    res.send(produtos.altera({ id: req.params.id, nome: req.body.nome }));
});

app.put(`/${produtos.colecao}`, (req, res) => {
    res.send(produtos.altera({ id: req.body.id, nome: req.body.nome }));
});


app.delete(`/${produtos.colecao}/:id`, (req, res) => {
    res.send(produtos.remove(req.params.id));
});


app.listen(3000)
