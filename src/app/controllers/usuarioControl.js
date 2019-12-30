'use strict';

const db = require('../../config/database.js');

const UsuarioModel = require("../models/usuarioModel.js");
const usuarioModel = new UsuarioModel(db);

class UsuarioControl {

    login(){
        return function (req, resp) {
           // req.session.destroy();
            resp.render("../views/login.ejs");
        }
    }

    autentica(){    
        return function (req, resp) {
            let body = req.body;
            usuarioModel.login(body)
                .then(user => {
                    console.log(user)
                    let result = JSON.stringify(user);
                    result = JSON.parse(result);
                    if(!user){
                        console.log('usuario invalido');
                    } else {
                        resp.redirect("/dashboard");
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

    salva(){
        return function(req, resp){
            var dados = req.body;
            usuarioModel.salvaUser(dados)
                .then(function(data) {
                    data = data;
                    dados.userId = data.userId;
                    resp.redirect("/usuarios");
                })
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = UsuarioControl;