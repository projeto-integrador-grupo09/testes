// Importar o express e bibliotecas necessarias
const express = require("express");
const path = require('path');
const router = require('./router');

// Criar o servidor
const app = express();

// Linha necessaria para rodar o EJS
app.set('view engine','ejs');

// Define a pasta public como sendo a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Definir roteador a ser utilizado
app.use(router);


// Servidor no modo aguardando requisição
app.listen(3000);