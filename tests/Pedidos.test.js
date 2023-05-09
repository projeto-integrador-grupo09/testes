const { Pedidos, sequelize } = require('../databases/models');

async function teste(){
    let pedidos = await Pedidos.findAll({raw:true});
        console.log(pedidos);
    sequelize.close();
}

teste();