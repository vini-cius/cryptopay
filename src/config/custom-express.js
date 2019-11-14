'use strict';

const express = require('express');
const app = express();

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('redis');
const rotas = require('../app/routers/routes.js');
rotas(app);

app.set('views','src/app/views/');

app.use(session({
  secret: 'vinicius',
  resave: false,
  saveUninitialized: true
}));

/*var cache = redis.createClient({host : 'localhost', port : 3000});

cache.on('ready',function() {
	console.log("Redis is ready");
});

cache.on('error',function() {
	console.log("Error in Redis");
});*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.use('/',express.static('src/app/public/'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(function(req, res, next) {
  res.locals.loggedUser = req.session.loggedUser;
  res.locals.timeZone = req.session.timeZone;
  next();
});

app.use(function (req, resp, next) {
  return resp.status(404).render('error-404.ejs')
});

module.exports = app;