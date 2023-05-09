const CarrinhoController = {
    showCarrinho: (req, res) => {
        return res.render('carrinho.ejs');
    },
    addCarrinho: (req, res) => {
        const { id, nome, preco, img } = req.body

        if (req.session.carrinho !== undefined) {
            req.session.carrinho.push({
                id,
                nome,
                preco,
                img,
                quantidade: 1,
                total: preco
            })
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
        console.log(req.session.carrinho)
    }

}

module.exports = CarrinhoController