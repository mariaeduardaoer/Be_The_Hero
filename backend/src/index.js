const express = require('express');
const routes = require('./routes')
const app = express();

app.use(express.json());
app.use(routes);


app.listen(3333);


/*Métodos HTTP:
    GET: Buscar/listar uma informação do backend
    POST: Criar
    PUT: Alterar
    DELETE: Deletar
*/
/*Tipos de parâmetros:
    Query Params: Parâmetors nomeados enviados na rota após "?" (Filtros, paginação)  
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/
/*
    SQL: MySQL, SQLite, Oracle...
    NoSQL: MongoDB...
*/
/*
    Driver: SELECT * FROM users
    Query  Builder: table('users').select('*').where()
*/