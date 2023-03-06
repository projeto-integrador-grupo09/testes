const path = require('path');
const produtos = require('../databases/camisas.json');
const paginasController = {

    showhome: (req, res)=>{
        //return res.sendFile(path.resolve('views/home.html'))
        return res.render('home.ejs');
    },

    showProdutos: (req, res)=>{
        return res.render('produtos.ejs',{produtos})
    },

    showCarrinho: (req, res)=>{
        let carrinho = [
            {
                "id": 1,
                "nome": "Espanha",
                "Cores": [
                    "Vermelha",
                    "Amarela"
                ],
                "preco": 350,
                "img": "/img/espanha.jpg",
                "destaque": true,
                "score":1
            }
        ]
        let nomeDoUsuario = 'neymar'
        
        return res.render('carrinho.ejs',{carrinho,nomeDoUsuario});
    },

    showLogin: (req, res)=>{
        return res.render('login.ejs');
    },

    showSac: (req, res)=>{
        return res.render('sac.ejs');
    },

    showDetalhe: (req, res)=>{
        let id = req.params.idDetalhe;

        //Importar o array camisas
        const camisas = require('../databases/camisas.json');

        //localizar a camisa de idprocurado
        const camisa = camisas.find(c => c.id == id);

        //mandar a página detalhe ser exibido
        return res.render('detalhe.ejs', {camisa});
    }
  
};

module.exports = paginasController