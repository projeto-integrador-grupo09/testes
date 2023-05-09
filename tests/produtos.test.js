const { Produtos } = require("../databases/models");

async function test() {
    let produtos = await Produtos.findAll({
        raw: true,
    });
    console.log(produtos)
}
test();