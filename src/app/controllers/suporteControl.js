'use strict';
const db = require('../../config/database.js');

const SuporteModel = require('../models/suporteModel.js');
const suporteModel = new SuporteModel(db);

class SuporteControl {
    listaChamados(){
        return function (req, resp){
            suporteModel.listaChamados()
                .then(chamados =>
                    resp.render('suporte.ejs', {chamados: chamados}))
                .catch(erro => console.log(erro))
        }
    }

    criaChamado(){
        return function(req, resp){
            let dados = req.body;
            suporteModel.criaChamado(dados)
                .then(function(data) {
                    data = data;
                    dados.userId = data.userId;
                    resp.redirect("/suporte");
                })
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = SuporteControl;