const produtosServices = require('../services/produtosServices');
const camisas = require('../databases/camisas.json');
const fs = require('fs');
const bcrypt = require('bcrypt');
const admin = require('../databases/admin.json');
const path = require('path');
const clientes = require('../databases/clientes.json');

const ClientesController = {
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


        // Verificar a existencia do administrador 
        let administrador = administradores.find(administrador => administrador.email === email);
        if (administrador === undefined) {
            return res.send("Falha no login");
        }
        // Verificar a senha do administrador
        let senhaCrypt = bcrypt.compareSync(senha, administrador.senha);
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

module.exports = ClientesController;