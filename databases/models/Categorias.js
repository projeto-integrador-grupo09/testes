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
    Categorias.associate = (models) => {
        Categorias.hasMany(
            models.Produtos,
            { as: "produtos", foreignKey: "categorias_id" }
        );
    }
    return Categorias
}