module.exports = (sequelize, DataTypes) => {
    const Clientes = sequelize.define(
        "Clientes",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false
            },
            nome:{ 
                type:DataTypes.STRING(120),
                allowNull:false,
                },
            email:{
                type:DataTypes.STRING(45),
                unique:true,
                allowNull:false
            },
            senha:{
                type:DataTypes.STRING(64)
            }
        },
        {
            tableName:"clientes",
            timestamps:true
        }
    )
    Clientes.associate = (models) => {
        Clientes.hasMany(
            models.Enderecos,
            {as: "enderecos", foreignKey: "clientes_id"}
        );
    }
    return Clientes
}