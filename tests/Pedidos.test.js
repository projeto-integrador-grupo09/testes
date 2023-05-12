const { Pedidos, sequelize } = require('../databases/models');

async function teste(){
    let pedidos = await Pedidos.findAll({include: "produtos"});
        console.log(pedidos.map(e => e.toJSON()));
    sequelize.close();
}

teste();