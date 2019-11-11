'use strict';

const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');
const engine = require("ejs-locals");

const bodyParser = require('body-parser');


const session = require('express-session');
//const sessaoAutenticacao = require('./authy-session.js');

//sessaoAutenticacao(app);
const rotas = require('../app/routers/routers.js');
rotas(app);

app.set('views','src/app/views/');

app.use(session({
  secret: 'vinicius',
  resave: false,
  saveUninitialized: true
}));

app.use('/',express.static('src/app/public/'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(bodyParser.json()); 

app.use(function(req, res, next) {
  res.locals.loggedUser = req.session.loggedUser;
  res.locals.timeZone = req.session.timeZone;
  next();
});

app.use(function (req, resp, next) {
  return resp.status(404).render('error-404.ejs')
});



module.exports = app;