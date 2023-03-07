// Importar o Express
const express = require('express');
const AdmController = require('./controllers/admController');
const paginasController = require('./controllers/paginasController');

//Criar o roteador
const router = express.Router();

//Definir as rotas para o roteador
router.get('/',paginasController.showhome);
router.get('/produtos', paginasController.showProdutos);
router.get('/carrinho',paginasController.showCarrinho);
router.get('/login',paginasController.showLogin);
router.get('/sac',paginasController.showSac);
router.get('/detalhe/:idDetalhe', paginasController.showDetalhe);

router.get('/adm/produtos', AdmController.listarProdutos); // Mostra a lista de produtos cadastrados
router.get('/adm/produtos/create', AdmController.criarProduto); // Mostra form para add produtos
router.get('/adm/produtos/edit', (req, res)=>{}); // Mostrar form para editar um produto
router.post('/adm/produtos/store', AdmController.gravarProduto); // Recebe info digitadas para criação de um produto
router.post('/adm/produtos/update', (req, res)=>{}), // Recebe info digitadas para edição de um produto
router.post('/adm/produtos/delete', (req, res)=>{}), // Receber o id do produto a ser removido

//Exportar o roteador
module.exports = router;    