const Produtos =require("../databases/models/Produtos")

async function test(){
    const produtos=await Produtos.findAll()
    console.log(produtos)
}
test()