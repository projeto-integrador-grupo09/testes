const camisas = require('../databases/camisas.json');
const fs = require('fs');
const path = require('path');

/**
 * Retorna um array com todas as pizzas gravadas.
 * @returns {Camisa[]}
 */
function carregarProdutos(){
    return camisas;
};

/**
 * Retorna a pizza de id passado pelo parâmetro idPizza
 * @param {number} idDetalhe 
 * @returns {Camisa} 
 * @throws Emite erro caso não encontre nenhuma pizza com o id dado
 */
function carregarCamisa(idDetalhe){
    let camisa = camisas.find(p => p.id == idDetalhe);
    if(camisa == undefined){
        throw new Error("Camisa inexistente");
    }
    return camisa;
}

/**
 * Adiciona uma pizza.
 * @param {Camisa} camisa
 */
function adicionarCamisas(camisa){
    // Criar um ID para a pizza
    if(camisas.length > 0){
        camisa.id = camisas[camisas.length - 1].id + 1;
    } else {
        camisa.id = 1;
    }

    // Adicionar pizza ao array de pizzas
    camisas.push(camisa);

    // Salvar este array no arquivo pizzas.json
    salvar();
}

/**
 * Remove uma pizza.
 * @param {number} idDetalhe
 * @throws Emite erro caso não exista pizza com o id passado
 */
function removerCamisas(idDetalhe){
    let posicao = camisas.findIndex(p => p.id == idDetalhe);
    if(posicao == -1){
        throw new Error("Camisa inexistente");
    }
    camisas.splice(posicao, 1);
    salvar();
}

/**
 * Altera as informações de uma pizza
 * @param {number} idDetalhe
 * @param {{nome: string, detalhes:string[], preco:number, destaque: boolean}} dadosDaPizza 
 */
function alterarCamisas(idDetalhe, dadosDaPizza){
    let camisa = camisas.find(p => p.id == idDetalhe);
    if(camisa == undefined){
        throw new Error("Camisa inexistente");
    }

    camisa.nome = dadosDaCamisa.nome;
    camisa.ingredientes = dadosDaCamisa.detalhes;
    camisa.preco = dadosDaCamisa.preco;
    camisa.destaque = dadosDaCamisa.destaque;

    salvar();

}

function salvar(){
    const caminhoParaArquivo = path.resolve(__dirname + "/../databases/camisas.json");
    fs.writeFileSync(caminhoParaArquivo, JSON.stringify(camisas, null, 4));
}

const ProdutosServices = {
    carregarProdutos,
    carregarCamisa,
    adicionarCamisas,
    removerCamisas,
    alterarCamisas
}
module.exports = ProdutosServices;