'use strict';

const baseRotas = require('./base-routers.js');

const CarteiraControl = require('../controllers/carteiraControl.js');
const carteiraControl = new CarteiraControl();

const PagamentoControl = require('../controllers/pagamentoControl.js');
const pagamentoContol = new PagamentoControl();

module.exports = (app) => {
    baseRotas(app);

    /*app.get('/', function (req, resp) {
        resp.render('login.ejs');
    });

    app.get('/dashboard', function (req, resp) {
        resp.render('index.ejs');
    });*/

    app.get('/configuracoes', carteiraControl.lista());

    app.get('/profile', function (req, resp) {
        resp.render('profile.ejs');
    });

    app.get('/usuarios', function (req, resp) {
        resp.render('usuarios.ejs');
    });

    app.get('/relatorio_vendas', pagamentoContol.lista());

    app.get('/error', function (req, resp) {
        resp.render('error-404.ejs');
    });
}