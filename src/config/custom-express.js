"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const rotas = require('../app/routers/routers.js');

rotas(app);

app.use('/',express.static('src/app/public/'));
app.use('/relatorios',express.static('src/app/public/'));

app.set('view engine', 'ejs');
app.set('views','src/app/views/');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

module.exports = app;