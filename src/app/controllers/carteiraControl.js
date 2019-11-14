'use strict';
const db = require('../../config/database.js');

const CarteiraModel = require('../models/carteiraModel.js');
const carteiraModel = new CarteiraModel(db);

class CarteiraControl {
    lista() {
        return function (req, resp) {
            carteiraModel.lista()
                .then(carteiras =>
                    resp.render('configuracoes.ejs', { carteiras: carteiras }))
                .catch(erro => console.log(erro));
        }
    }

    listaMoeda(){
        return function (req, resp){
            carteiraModel.listaMoeda()
                .then(moedas =>
                    resp.render('configuracoes.ejs', { moedas: moedas }))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = CarteiraControl;