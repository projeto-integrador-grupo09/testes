module.exports = (sequelize,DataTypes) => {
    const Pedidos = sequelize.define(
        "Pedidos",
        {

        },
        {
            tableName:"pedidos",
            timestamps:false
        }
    ) 
    return Pedidos
}