'use strict';

const express = require('express');
const app = express();
const path = require("path");
//const expressLayouts = require('express-ejs-layouts');
const engine = require("ejs-locals");
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('views', path.join(__dirname, '../app/views'));

app.use(session({
  secret: 'cryptopay',
  resave: false,
  saveUninitialized: true
}));

app.use('/', express.static('src/app/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.engine('ejs', engine);
app.set('view engine', 'ejs');

//app.use(expressLayouts);

const rotas = require('../app/routers/routes.js');
rotas(app);

/*app.use(function(req, res, next) {
  res.locals.loggedUser = req.session.loggedUser;
  res.locals.timeZone = req.session.timeZone;
  next();
});*/

app.use(function (req, resp, next) {
  return resp.status(404).render('error-404.ejs')
});

module.exports = app;