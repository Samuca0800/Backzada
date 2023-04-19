const router = require('express').Router();
const Produto = require('../controllers/produtos.controllers');

router.get('/produtos', Produto.listar);
router.get('/produtos/:id', Produto.listar)
router.post('/produtos/cadastrar', Produto.cadastrar);
router.put('/produtos/alterar', Produto.alterar);
router.delete('/produtos/deletar/:id', Produto.excluir);

module.exports = router