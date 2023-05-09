module.exports = (sequelize, DataTypes) => {
    const Forma_de_pagamento = sequelize.define(
        "Forma_de_pagamento",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(120),
                allowNull: false,
            }
        },
        {
            tableName: "forma_de_pagamento",
            timestamps: false
        }
    )
    return Forma_de_pagamento
}