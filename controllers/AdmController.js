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

        // criar um objeto produto
        let produto = {
            nome: req.body.nome,
            cor: req.body.cor.split(',').map(e => e.trim()), // Transforma uma string em um arrai sem espaços
            preco: Number(req.body.preco),
            img: "/img/no-image.png",
            detalhe: "Tecido em AEROREADY para remoção de suor, malha dupla 100% poliester reciclado",
            destaque: false,
            score: 0
        } 


        // Salvar esse objeto no array de produtos
        produtosServices.adicionarCamisas(produto);

        //Redirecionar o usuario para a lista de produtos
        res.redirect('/adm/produtos')
     },
    editarProduto: (req, res)=> {
        // Capiturar o ID do produto
        let id = req.params.id;

        const camisas = require('../databases/camisas.json');

        // Encontrar o produto a ser editado guardando na variavel produto
        const produto = camisas.find(p => p.id == id);

        // Renderizar a view form-edit-produtos.ejs
        //passando para essa view
        res.render('form-edit-produtos.ejs', {produto});

    },

    alterarProduto: (req, res)=>{
        produtosServices.alterarCamisa;

    }
}



module.exports = AdmController