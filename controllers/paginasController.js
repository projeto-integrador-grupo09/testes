const path = require('path');
const idu = 2;
const produtos = require('../databases/camisas.json');
const paginasController = {

    showhome: (req, res) => {
        //return res.sendFile(path.resolve('views/home.html'))
        return res.render('home.ejs');
    },

    showProdutos: (req, res) => {
        return res.render('produtos.ejs', { produtos })
    },

    showLogin: (req, res) => {
        return res.render('login.ejs');
    },

    showSac: (req, res) => {
        return res.render('sac.ejs');
    },

    showDetalhe: (req, res) => {
        let id = req.params.idDetalhe;

        //Importar o array camisas
        const camisas = require('../databases/camisas.json');

        //localizar a camisa de idprocurado
        const camisa = camisas.find(c => c.id == id);

        //mandar a página detalhe ser exibido
        return res.render('detalhe.ejs', { camisa });
    },
    showPerfil: (req, res) => {
        // importar o array de usuarios
        const usuarios = require('../databases/usuarios.json');

        // encontrar o usuario com o id dado
        const usuario = usuarios.find(u => u.id == idu);

        if (usuario !== undefined) {
            // caso encontre, passar usuario para view perfil.ejs
            return res.render('perfil.ejs', { usuario });
        } else {
            // caso não encontre, mando uma view erro-404.ejs
            return res.render('erro-404.ejs');
        }


        return res.render('perfil.ejs');
    }

};

module.exports = paginasController