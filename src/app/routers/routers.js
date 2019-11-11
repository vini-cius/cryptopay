'use strict';

const CarteiraControl = require('../controllers/carteiraControl.js');
const carteiraControl = new CarteiraControl();

const PagamentoControl = require('../controllers/pagamentoControl.js');
const pagamentoContol = new PagamentoControl();

const UsuarioControl = require('../controllers/usuarioControl.js');
const usuarioControl = new UsuarioControl();

const BlockioControl = require('../controllers/blockioControl.js');
const blockioControl = new BlockioControl();

module.exports = (app) => {
    app.get('/', usuarioControl.login());
    app.get('/login', usuarioControl.login());
    app.post('/login', usuarioControl.autentica());

    app.get('/dashboard', blockioControl.get_balance());
    
    app.get('/dashboard', function (req, resp) {
        resp.render('index.ejs');
    });

    app.get('/configuracoes', carteiraControl.lista());
    app.get('/configuracoes', carteiraControl.listaMoeda());

    app.get('/profile', function (req, resp) {
        resp.render('profile.ejs');
    });

    app.get('/usuarios', usuarioControl.lista());

    app.get('/relatorio_vendas', pagamentoContol.lista());
}