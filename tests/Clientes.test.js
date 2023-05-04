const { Clientes } = require('../databases/models');

async function teste(){
    // let clientes = await Clientes.findByPk(2, {raw:true, include: "enderecos"});
    let clientes = await Clientes.findByPk(2, {include: "enderecos"});
    console.log(clientes.toJSON());
}

teste();