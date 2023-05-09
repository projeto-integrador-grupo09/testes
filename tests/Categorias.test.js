const { Categorias } = require("../databases/models");

async function test() {
    let categorias = await Categorias.findAll({
        raw: true,
    });
    console.log(categorias)
}
test();