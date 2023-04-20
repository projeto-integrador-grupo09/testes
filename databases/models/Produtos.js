module.exports = (sequelize,DataTypes) => {
    const Produtos = sequelize.define(
        "Produtos",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false
            },
            nome:{ 
                type:DataTypes.STRING(45),
                allowNull:false,
                },
            preco:{
                type:DataTypes.DECIMAL(6,2),
                allowNull:false,
            },
            categorias_id:{
                type:DataTypes.INTEGER,
                allowNull:false,
            }
        },
        {
            tableName:"produtos",
            timestamps:false
        }
    ) 
    return Produtos 
}