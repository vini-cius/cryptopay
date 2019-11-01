'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
//login
var session = require('express-session');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var passport = require('passport');

require('./authy-session.js')(passport);
require('../app/routers/routers.js')(app, passport);

app.use('/',express.static('src/app/public/'));

app.set('view engine', 'ejs');
app.set('views','src/app/views/');

/*app.use(function (req, resp, next) {
    return resp.status(404).render('error-404.ejs')
});*/

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'justasecret',
  resave:true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


/* Teste get balance */
const BlockIo = require('block_io');
const version = 2; // API version
const block_io = new BlockIo('b3cb-58be-1da2-ad3e', 'sc0t3w3e1ll4nd', version);
block_io.get_balance({},console.log);

module.exports = app;