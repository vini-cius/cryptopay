"use strict";

const CarteiraControl = require('../controllers/carteiraControl.js');
const carteiraControl = new CarteiraControl();

const PagamentoControl = require('../controllers/pagamentoControl.js');
const pagamentoContol = new PagamentoControl();

var flash = require('connect-flash');
app.use(flash());

module.exports = (app,passport) => {

    app.get('/', function (req, resp) {
        resp.render('index.ejs');
    });

    app.get('/login', function (req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash: true
    }),
        function (req, res) {
            if (req.body.remember) {
                req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
                req.session.cookie.expires = false;
            }
            res.redirect('/');
        });

    app.get('/configuracoes', carteiraControl.lista());

    app.get('/profile', isLoggedIn, function (req, res) {
        res.render('profile.ejs', {
            user: req.user
        });
    });

    app.get('/usuarios', function (req, resp) {
        resp.render('usuarios.ejs');
    });

    app.get('/relatorio_vendas', pagamentoContol.lista());

    app.get('/error', function (req, resp) {
        resp.render('error-404.ejs');
    });
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}