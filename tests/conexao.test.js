// Importando o sequelize
const sequelize = require("sequelize");

// Importar o arquivo config
const config = require("../databases/config").development;

// Criar a conexão com o banco de dados
const conexao = new sequelize(config);
const sql = `SELECT * FROM produtos;`

const promessa = conexao.query(sql, {type: sequelize.QueryTypes.SELECT});

promessa.then(
    dados => {
        console.log(dados);
        conexao.close();
    }
);