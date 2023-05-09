module.exports = (sequelize, DataTypes) => {
    const Categorias = sequelize.define(
        "Categorias",
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
            tableName: "categorias",
            timestamps: false
        }
    )
    return Categorias
}