const produtosServices = require('../services/produtosServices');

const AdmController = {
listarProdutos: (req, res) => {
    
        //carregar produtos
        const camisas = produtosServices.carregarProdutos();

        // renderizar view listar pizza, passando o produto para ela
        res.render('lista-produtos.ejs', {camisas})

    },

    criarProduto: (req, res)=> {
       res.render('form-add-produtos.ejs')
    },

    gravarProduto: (req, res)=> {
        // req.body está carregando as infos digitadas pelo usuario
        res.send(req.body)

    //     // criar um objeto produto
    //     let produto = {
    //         nome: req.body.nome,
    //         cor: req.body.cor,
    //         preco: Number(req.body.preco)
    //     } 

    //     // Salvar esse objeto no array de produtos
    //     produtosServices.adicionarCamisas(produto);

    //     //Redirecionar o usuario para a lista de produtos
    //     res.redirect('/adm/produtos')
     }
}



module.exports = AdmController