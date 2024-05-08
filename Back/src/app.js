const express = require('express');
const config = require('./config');
const todo = require('./modulos/todolist/rutas.js');
const cors = require('cors');

//configuracion
const app = express();

//middlewares
app.use(cors());
app.use(express.json()); //parse
app.use(express.urlencoded({ extended: true }));  //parse si le pongo true significa que uso la biliboteca querystring

//configuracion de la app 
app.set('port', config.app.port);

//rutas
app.use('/api/list', todo);

module.exports = app; 