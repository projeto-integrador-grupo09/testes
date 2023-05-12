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
    Pedidos.associate = (models) =>{
        Pedidos.belongsToMany(
            models.Produtos,
            {
                as: "produtos",
                through: "produtos_x_pedidos", // tabela ATRAVES da qual a associação acontece
                foreignKey: "pedido_id", // nome da coluna que é o id do model atual
                otherKey: "produto_id", // nome da coluna que é o id do model relacionado
                timestamps: false
            }
        )
        }
    return Pedidos
}