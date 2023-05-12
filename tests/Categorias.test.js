const { Categorias } = require("../databases/models");

async function test() {
    let categorias = await Categorias.findAll({
        include:"produtos",
    });
    console.log(categorias)
}
test();