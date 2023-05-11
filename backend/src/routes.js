const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();



//rota com CONSULTAR SQL para lista todas as ongs do BD
routes.get('/ongs', OngController.list);

//rota para CRIAR uma ong no BD
routes.post('/ongs', OngController.create);

//rota para CRIAR um caso (incident) no BD
routes.post('/incidents', IncidentController.create);

//rota para LISTAR casos
routes.get('/incidents', IncidentController.list);

//rota para DELETAR um caso de uma ong
routes.delete('/incidents/:id', IncidentController.delete);
   


module.exports = routes;