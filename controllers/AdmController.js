const produtosServices = require('../services/produtosServices');
const camisas = require('../databases/camisas.json');
const fs = require('fs');

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
        // Renomear o arquivo concatenando a data com o nome original do arquivo
        let novoNome = `${Date.now()}-${req.file.originalname}`;
        fs.renameSync(req.file.path,`public/img/${novoNome}`);

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

    alterarProduto: (req, res)=> {
        const id = req.params.id
        let camisa = camisas.find(p => p.id == id);
        if(camisa == undefined){
            throw new Error('Camisa inexistente');
        }
    
        camisa.nome = req.body.nome;
        camisa.cor = req.body.cor;
        camisa.detalhe = req.body.detalhe;
        camisa.preco = Number(req.body.preco);
    
        produtosServices.salvar();

        return res.redirect('/adm/produtos');
    
    },

    removerProduto: (req, res)=> {
        const id = req.params.id

        produtosServices.removerCamisas(id);

        return res.redirect('/adm/produtos');
    }

    }
    
    
    
    
    
    



module.exports = AdmController