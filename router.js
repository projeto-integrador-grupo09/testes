// Importar o Express
const express = require('express');
const AdmController = require('./controllers/admController');
const paginasController = require('./controllers/paginasController');
const multer = require('multer');
const path = require('path');
const autenticacaoDeLogin = require('./middleware/autenticacaoDeLogin')

//Criar o roteador
const router = express.Router();

// Configurando Multer
const multerDiskstorage = multer.diskStorage({
  destination: function (req, file, cb) { // Destination - para onde o arquivo vai
    const folder = path.join(__dirname, "./public/img")
    cb(null, folder);
  },
  filename: function (req, file, cb) {   // filename - o nome do arquivo
    const imgName = Date.now() + file.originalname;
    cb(null, imgName);
  }
}); //Date.now registra os segundos no nome do arquivo para que não haja repetição de nomes de arquivos, path.extname extrai a extensão do arquivo original

const upload = multer({ storage: multerDiskstorage });


//Definir as rotas para o roteador
router.get('/', paginasController.showhome);
router.get('/produtos', paginasController.showProdutos);
router.get('/carrinho', paginasController.showCarrinho);
router.get('/login', paginasController.showLogin);
router.get('/perfil', paginasController.showPerfil);
router.get('/sac', paginasController.showSac);
router.get('/detalhe/:idDetalhe', paginasController.showDetalhe);

router.get('/adm/login', AdmController.mostrarLogin) // Mostra form para login do adm
router.post('/adm/login', AdmController.login)  // Recebe as informações do form login-adm.ejs

// CRUD produtos
//router.use('/adm', autenticacaoDeLogin); // Libera as telas /adm somente para usuários cadastrados
router.get('/adm/produtos', AdmController.listarProdutos); // Mostra a lista de produtos cadastrados
router.get('/adm/produtos/create', AdmController.criarProduto); // Mostra form para add produtos
router.post('/adm/produtos/store', upload.single('img'), AdmController.gravarProduto); // Recebe info digitadas para criação de um produto
router.get('/adm/produtos/:id/edit', AdmController.editarProduto); // Mostrar form para editar um produto
router.post('/adm/produtos/:id/update', AdmController.alterarProduto), // Recebe info digitadas para edição de um produto
router.get('/adm/produtos/:id/delete', AdmController.removerProduto), // Receber o id do produto a ser removido


  //criando usuarios
router.get('/adm/usuarios', AdmController.listarUsuarios); // Mostra a lista de usuarios cadastrados
router.get('/adm/usuarios/edit', ()=>{}); // Mostrar form para editar um produto
router.get('/adm/usuarios/create', AdmController.criarUsuario); // Mostra form para add usuarios
router.post('/adm/usuarios/store', AdmController.gravarUsuario); // Recebe info digitadas para criação de um produto
router.post('/adm/usuarios/update', ()=>{}), // Recebe info digitadas para edição de um produto
router.get('/adm/usuarios/:idDoUsuario/delete', ()=>{}), // Receber o id do produto a ser removido


  //Exportar o roteador
  module.exports = router;    