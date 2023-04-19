const con = require('../dao/connect.js');
const Produto = require('../models/produtos.models.js');

const listar = (req, res) => {
    let produto = new Produto(req.params);
    con.query(produto.read(), (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        } else {
            res.json({'error': err}).status(400).end();
        }
    });
}

const cadastrar = (req, res) => {
    let produto = new Produto(req.body)
    con.query(produto.create(), (err, result) => {
        if(err == null) {
            res.json({'msg': "produto listado com sucesso"}).status(200).end();
        } else {
            res.json({'msg': 'Falha no cadastro: ' + err}).status(400).end();
        }
    });
}

const alterar = (req, res) => {
    let produto = new Produto(req.body);
    con.query(produto.update(), (err, resp) => {
        if(err == null) {
            res.json({Msg: "Alterações no produto foram feitas com sucesso"}).status(200).end();
        } else {
            res.json({'msg': 'A alteração do produto não pôde ser concluída: ' + err}).status(400).end();
        }
    })
}

const excluir = (req, res) => {
    let produto = new Produto(req.params);
    con.query(produto.delete(), (err, resp) => {
        if(err == null) {
            res.json({msg: "Produto deletado}).status(200).end();
        } else {
            res.json({msg: "Não foi possível fazer a alteracão:" + err}).status(400).end();
        }
    })
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    excluir
}