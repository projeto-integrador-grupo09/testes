module.exports = (sequelize, DataTypes) => {
    const Pedidos = sequelize.define(
        "Pedidos",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            enderecos_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            clientes_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            forma_de_pagamento_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            tableName: "pedidos",
            timestamps: false
        }
    )
    return Pedidos
}