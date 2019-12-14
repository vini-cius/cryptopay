'use strict';

const CarteiraControl = require('../controllers/carteiraControl.js');
const carteiraControl = new CarteiraControl();

const PagamentoControl = require('../controllers/pagamentoControl.js');
const pagamentoControl = new PagamentoControl();

const UsuarioControl = require('../controllers/usuarioControl.js');
const usuarioControl = new UsuarioControl();

const BlockioControl = require('../controllers/blockioControl.js');
const blockioControl = new BlockioControl();

module.exports = (app) => {
    app.get('/', usuarioControl.login());
    app.get('/login', usuarioControl.login());
    app.post('/login', usuarioControl.autentica());

    app.get('/dashboard', blockioControl.get_balance());
    app.get('/dashboard', pagamentoControl.totalGanhos());
    app.get('/dashboard', function (req, resp) {
        resp.render('index.ejs');
    });

    app.get('/configuracoes', carteiraControl.lista(), carteiraControl.listaMoeda());    

    app.get('/profile', function (req, resp) {
        resp.render('profile.ejs');
    });

    app.get('/usuarios', usuarioControl.lista());
    app.post('/usuarios/salva-user', usuarioControl.salva());

    app.get('/relatorio_vendas', pagamentoControl.lista());

    app.get('/suporte', function (req, resp) {
        resp.render('suporte.ejs');
    });
}