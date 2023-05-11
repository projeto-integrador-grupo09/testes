module.exports = (sequelize, DataTypes) => {
    const Administradores = sequelize.define(
        "Administradores",
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
            },
            email: {
                type: DataTypes.STRING(45),
                unique: true,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(64)
            }
        },
        {
            tableName: "administradores",
            timestamps: false
        }
    )
    return Administradores
}