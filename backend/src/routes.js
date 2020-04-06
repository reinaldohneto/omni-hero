const express = require('express');
const crypto = require('crypto');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.post('/sessions', SessionController.create);

routes.delete('/incidents/:id', IncidentController.delete);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.get('/profile', ProfileController.index);

module.exports = routes;