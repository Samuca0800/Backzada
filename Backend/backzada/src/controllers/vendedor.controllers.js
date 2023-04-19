const con = require('../dao/connect.js');
const Vendedor = require('../models/vendedor.models.js');

const criar = (req, res) => {
    const vendedor = new Vendedor(req.params);
    
};

const listar = (req, res) => {};

const alterar = (req, res) => {};

const deletar = (req, res) => {};