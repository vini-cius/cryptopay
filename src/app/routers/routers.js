"use strict";
const db = require('../../config/database.js');

const PagamentoModel = require('../models/pagamentoModel.js');
const pagamentoModel = new PagamentoModel(db);

const CarteiraModel = require('../models/carteiraModel.js');
const carteiraModel = new CarteiraModel(db);

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.render('login.ejs');
    });

    app.get('/dashboard', function (req, resp) {
        resp.render('index.ejs');
    });

    app.get('/configuracoes', function (req, resp) {
        carteiraModel.lista()
            .then(carteiras =>
                resp.render('configuracoes.ejs', { carteiras: carteiras }))
            .catch(erro => console.log(erro));
        
        /*carteiraModel.listaMoeda()
            .then(moeda =>
                resp.render('configuracoes.ejs', { moeda: moeda }))
            .catch(erro => console.log(erro));*/
    });

    app.get('/profile', function (req, resp) {
        resp.render('profile.ejs');
    });

    app.get('/usuarios', function (req, resp) {
        resp.render('usuarios.ejs');
    });

    app.get('/relatorio_vendas', function (req, resp) {
        pagamentoModel.lista()
            .then(pagamentos =>
                resp.render('relat_vendas.ejs', { pagamentos: pagamentos }))
            .catch(erro => console.log(erro));
    });

    app.get('/error', function (req, resp) {
        resp.render('error-404.ejs');
    });
}