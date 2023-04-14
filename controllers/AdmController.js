const produtosServices = require('../services/produtosServices');
const camisas = require('../databases/camisas.json');
const fs = require('fs');
const bcrypt = require('bcrypt');
const admin = require('../databases/admin.json');
const path = require('path');
const administradores = require('../databases/administradores.json');
const clientes = require('../databases/clientes.json');

const AdmController = {
    listarProdutos: (req, res) => {

        //carregar produtos
        const camisas = produtosServices.carregarProdutos();

        // renderizar view listar pizza, passando o produto para ela
        res.render('lista-produtos.ejs', { camisas })

    },

    criarProduto: (req, res) => {
        res.render('form-add-produtos.ejs')
    },

    gravarProduto: (req, res) => {
        // Renomear o arquivo concatenando a data com o nome original do arquivo
        let novoNome = `${Date.now()}-${req.file.originalname}`;
        fs.renameSync(req.file.path, `public/img/${novoNome}`);

        // criar um objeto produto
        let produto = {
            nome: req.body.nome,
            cor: req.body.cor.split(',').map(e => e.trim()), // Transforma uma string em um arrai sem espaços
            preco: Number(req.body.preco),
            img: `/img/${novoNome}`,
            detalhe: "Tecido em AEROREADY para remoção de suor, malha dupla 100% poliester reciclado",
            destaque: false,
            score: 0
        }


        // Salvar esse objeto no array de produtos
        produtosServices.adicionarCamisas(produto);

        //Redirecionar o usuario para a lista de produtos
        res.redirect('/adm/produtos')
    },
    editarProduto: (req, res) => {
        // Capiturar o ID do produto
        let id = req.params.id;

        const camisas = require('../databases/camisas.json');

        // Encontrar o produto a ser editado guardando na variavel produto
        const produto = camisas.find(p => p.id == id);

        // Renderizar a view form-edit-produtos.ejs
        //passando para essa view
        res.render('form-edit-produtos.ejs', { produto });

    },

    alterarProduto: (req, res) => {
        const id = req.params.id
        let camisa = camisas.find(p => p.id == id);
        if (camisa == undefined) {
            throw new Error('Camisa inexistente');
        }

        camisa.nome = req.body.nome;
        camisa.cor = req.body.cor.split(',').map(e => e.trim());
        camisa.detalhe = req.body.detalhe;
        camisa.preco = Number(req.body.preco);


        produtosServices.salvar();

        return res.redirect('/adm/produtos');

    },

    removerProduto: (req, res) => {
        const id = req.params.id

        produtosServices.removerCamisas(id);

        return res.redirect('/adm/produtos');
    },

    //usuarios
    listarUsuarios: (req, res) => {


        // renderizar view listar usuario, passando o produto para ela
        res.render('lista-admin.ejs', { admin })

    },

    criarUsuario: (req, res) => {
        res.render('form-add-admin.ejs')
    },

    gravarUsuario: (req, res) => {
        let novoid = 1
        if (admin.length > 0) {
            novoid = admin.at(-1).id + 1
        }
        let senhaCriptografada = bcrypt.hashSync(req.body.senha, 10)
        let usuario = {
            "id": novoid,
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": senhaCriptografada,
        }
        admin.push(usuario);
        fs.writeFileSync(path.join(__dirname, "..", "databases", "admin.json"), JSON.stringify(admin, null, 4))


        res.redirect('/adm/usuarios');

    },

    mostrarLogin: (req, res) => {
        res.render('login-adm.ejs');
    },

    login: (req, res) => {
        // Capturar o email e a senha digitadas pelo usuário
        const { email, senha } = req.body


        // Verificar a existencia do administrador
        let adm = administradores.find(adm => adm.email === email);
        if (adm === undefined) {
            return res.send("Falha no login");
        }
        // Verificar a senha do administrador
        let senhaCrypt = bcrypt.compareSync(senha, adm.senha);
        if (!senhaCrypt) {
            return res.send("Falha na senha");
        }


        // Criar a session/cookie do adm  
        //  1 - Baixar a biblioteca npm i express-session
        //  2 - Configura o setup para lidar com sessions no app.js
        req.session.admLogado = true;

        // Redireciona-lo para /adm/produtos
        res.redirect('/adm/produtos');


    },
    //Clientes
    listarClientes: (req, res) => {

        // Renderizar view listar usuario, passando o produto para ela
        res.render('lista-clientes.ejs', { cliente })

    },

    criarCliente: (req, res) => {
        res.render('form-add-clientes.ejs')
    },

    gravarCliente: (req, res) => {
        let novoIdCliente = 1
        if (clientes.length > 0) {
            novoIdCliente = clientes.at(-1).id + 1
        }
        let senhaCriptografadaCliente = bcrypt.hashSync(req.body.senha, 10)
        let cliente = {
            "id": novoIdCliente,
            "nome": req.body.nome,
            "email": req.body.email,
            "senha": senhaCriptografadaCliente,
        }
        cliente.push(usuario);
        fs.writeFileSync(path.join(__dirname, "..", "databases", "clientes.json"), JSON.stringify(cliente, null, 4))


        res.redirect('/adm/clientes');

    },

    mostrarLogin: (req, res) => {
        res.render('login-adm.ejs');
    },

    login: (req, res) => {
        // Capturar o email e a senha digitadas pelo usuário
        const { email, senha } = req.body


        // Verificar a existencia do cliente 
        let cliente = clientes.find(cliente => cliente.email === email);
        if (cliente === undefined) {
            return res.send("Falha no login");
        }
        // Verificar a senha do cliente
        let senhaCrypt = bcrypt.compareSync(senha, cliente.senha);
        if (!senhaCrypt) {
            return res.send("Falha na senha");
        }


        // Criar a session/cookie do adm  >>>>PAREI AQUI
        //  1 - Baixar a biblioteca npm i express-session
        //  2 - Configura o setup para lidar com sessions no app.js
        req.session.admLogado = true;

        // Redireciona-lo para /adm/produtos
        res.redirect('/adm/produtos');


    }
}

module.exports = AdmController