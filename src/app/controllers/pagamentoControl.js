'use strict';
const db = require('../../config/database.js');

const PagamentoModel = require('../models/pagamentoModel.js');
const pagamentoModel = new PagamentoModel(db);

class PagamentoControl {
    lista() {
        return function (req, resp) {
            pagamentoModel.lista()
                .then(pagamentos =>
                    resp.render('relat_vendas.ejs', { pagamentos: pagamentos }))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = PagamentoControl;