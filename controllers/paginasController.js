const path = require('path');
const paginasController = {

    showhome: (req, res)=>{
        //return res.sendFile(path.resolve('views/home.html'))
        return res.render('home.ejs');
    },

    showProdutos: (req, res)=>{
        //let id = req.params.idProduto
        return res.sendFile(path.resolve('views/produtos.html'))
    },

    showCarrinho: (req, res)=>{
        return res.sendFile(path.resolve ('views/carrinho.html'))
    },

    showLogin: (req, res)=>{
        return res.sendFile(path.resolve('views/login.html'))
    },

    showSac: (req, res)=>{
        return res.sendFile(path.resolve('views/sac.html'))
    },
  
};

module.exports = paginasController