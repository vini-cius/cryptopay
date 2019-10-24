"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const methodOverride = require('method-override');

const authySession = require('./authy-session.js');
authySession(app);

const rotas = require('../app/routers/routers.js');
rotas(app);

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

app.use('/',express.static('src/app/public/'));
app.use('/relatorios',express.static('src/app/public/'));

app.set('view engine', 'ejs');
app.set('views','src/app/views/');

app.use(function (req, resp, next) {
    return resp.status(404).render('error-404.ejs')
});

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

/* Teste get balance */
const BlockIo = require('block_io');
const version = 2; // API version
const block_io = new BlockIo('b3cb-58be-1da2-ad3e', 'sc0t3w3e1ll4nd', version);
block_io.get_balance({},console.log);

module.exports = app;