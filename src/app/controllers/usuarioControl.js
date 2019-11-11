'use strict';

const db = require('../../config/database.js');

const UsuarioModel = require("../models/usuarioModel.js");
const usuarioModel = new UsuarioModel(db);

class UsuarioControl {

    login(){
        return function (req, resp) {
            console.log(req.session)
           // req.session.destroy();
            resp.render("../views/login.ejs");
        }
    }

    autentica(){    
        return function (req, resp) {
            let body = req.body;
            console.log('body: ' + body)
            usuarioModel.login(body)
                .then(user => {
                    if(user.userId){
                        req.session.loggedUser = user;
                        req.session.timeZone = req.body.timeZone * -1;
                        resp.render("../views/index.js", { loggedUser: user, timeZone: req.session.timeZone });
                    } else {
                        resp.render("../views/login.ejs");
                    }
                })
                .catch(erro => console.log(erro));
        }
    }

    lista(){
        return function (req, resp) {
            usuarioModel.lista()
                .then(usuarios => 
                    resp.render('usuarios.ejs', { usuarios: usuarios }))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = UsuarioControl;