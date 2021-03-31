import express from 'express'; 
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);    

// GET: Busca ou lista uma informacao
// POST: Cria alguma nova informacao
// PUT: Atualiza uma informacao
// DELETE: Deleta um informacao

//Corpo (req.body) :Dados para criacao ou atualizacao de um registro
//Route params (req.params): Identificar qual eu quero atualizar ou deletar ex: /users:id
//Query Params (req.query): pagiancao, filtros , ordenacao

 
//localhost:3333
app.listen(3333);