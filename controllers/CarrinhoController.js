const CarrinhoController = {
    showCarrinho: (req, res) => {
        let carrinho = req.session.carrinho;

        if(carrinho === undefined){
            carrinho = [];
        }

        return res.render('carrinho.ejs',{
            carrinho
        });
    },
    addCarrinho: (req, res) => {
        const { id, nome, preco, img } = req.body

        // Verificar se existe item no carrinho, caso exista, adicione mais um ao array, senão, cria um array
        if (req.session.carrinho !== undefined) {

            // Verificar se já existe determinado produto no carrinho
            const produto = req.session.carrinho.find(item=>parseInt(item.id)===parseInt(id));

            if(produto!==undefined){
                // Se existir, incremento a quantidade em 1 unidade e calculo o total do item de acordo com a quantidade
                produto.quantidade += 1;
                produto.total = produto.preco * produto.quantidade;
            }else{
                // Se não existir, adiciono esse produto ao array
                req.session.carrinho.push({
                    id,
                    nome,
                    preco,
                    img,
                    quantidade: 1,
                    total: preco
                })
            }

        } else {
            req.session.carrinho = [{
                id,
                nome,
                preco,
                img,
                quantidade: 1,
                total: preco

            }]
        }
        
        return res.redirect('/carrinho');
    }

}

module.exports = CarrinhoController