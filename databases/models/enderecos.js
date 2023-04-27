module.exports = (sequelize, DataTypes) => {
    const Enderecos = sequelize.define(
        "Enderecos",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            clientes_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            bairro: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            logradouro: {
                type: DataTypes.STRING(250),
                allowNull: false,
            },
            numero: {
                type: DataTypes.STRING(6),
            },
            cidade: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cep: {
                type: DataTypes.STRING(8),
            }
        },
        {
            tableName: "enderecos",
            timestamps: false
        }
    )
    return Enderecos
}