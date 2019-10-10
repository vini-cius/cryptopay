"use strict";

const PagamentoModel = require('../models/pagamentoModel.js');
const CarteiraModel = require('../models/carteiraModel.js');
const db = require('../../config/database.js');

module.exports = (app) => {
    app.get('/', function (req, resp) {
        resp.render('login.ejs');
    });

    app.get('/dashboard', function (req, resp) {
        resp.render('index.ejs');
    });

    app.post('/dashboard/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('Processando uma requisição de um novo pagamento...');

        const pagamentoModel = new PagamentoModel(db);

        pagamentoModel.salva(pagamento)
            .then(function(data) {
			    data = data;
                res.render("index.ejs", {pagamentos: dados, typeMessage: data.type, message: data.message });
            })
            .catch(erro => console.log(erro));
    });

    app.get('/configuracoes', function (req, resp) {
        const carteiraModel = new CarteiraModel(db);
        carteiraModel.lista()
            .then(carteiras =>  
                resp.render('configuracoes.ejs', {carteiras: carteiras}))
            .catch(erro => console.log(erro));
    });

    app.get('/profile', function (req, resp) {
        resp.render('profile.ejs');
    });

    app.get('/usuarios', function (req, resp) {
        resp.render('usuarios.ejs');
    });

    app.get('/lista', function (req, resp) {
        const pagamentoModel = new PagamentoModel(db);
        pagamentoModel.lista(function(erro,resultados){
            resp.render('lista.ejs', {pagamentos: resultados});  
        });
    });

    app.get('/relatorio_vendas', function (req, resp) {
        const pagamentoModel = new PagamentoModel(db);
        pagamentoModel.lista()
            .then(pagamentos =>  
                resp.render('relat_vendas.ejs', {pagamentos: pagamentos}))
            .catch(erro => console.log(erro));
    });

    app.get('/error', function (req, resp) {
        resp.render('error-404.ejs');
    });
}