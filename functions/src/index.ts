import * as functions from "firebase-functions";
import * as express from 'express';

import { clientController } from './controller/exportsControllers'

//APIS
var AppApi = express();
var AppClients = express();



//ROUTES - API
AppApi.get('/', function(req, res) {
  res.send(`Status: Online ${new Date()}`);
});



//ROUTES - CLIENTE
AppClients.get('/:idClient', (req, res) => {res.json(clientController.getClientById(req.params.idClient)) });
AppClients.route('/')
    .get((req, res) => {res.json(clientController.getClients())} )
    .post((req, res) => {res.json(clientController.postClients())} )
    .put((req, res) => {res.json(clientController.putClients())} )
    .delete((req, res) => {res.json(clientController.deleteClients())} );

 
//EXPORTS APP
exports.api = functions.https.onRequest(AppApi);
exports.clients = functions.https.onRequest(AppClients);







