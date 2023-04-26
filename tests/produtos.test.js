const {Produtos} =require("../databases/models")

async function test(){
    const produtos=await Produtos.findAll()
    console.log(produtos)
}
test()