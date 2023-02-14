// Importar o Express
const express = require('express');
const paginasController = require('./controllers/paginasController');

//Criar o roteador
const router = express.Router();

//Definir as rotas para o roteador
router.get('/',paginasController.showhome);
router.get('/produtos', paginasController.showProdutos);
router.get('/carrinho',paginasController.showCarrinho);
router.get('/login',paginasController.showLogin);
router.get('/sac',paginasController.showSac);

//Exportar o roteador
module.exports = router;    