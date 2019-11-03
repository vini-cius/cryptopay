'use strict';

class BaseControl {
    static rotas() {
        return {
            home: '/dashboard',
            login: '/login'
        };
    }

    home() {
        return function(req, resp) {
            resp.render('index.ejs');
        };
    }

    login() {
        return function(req, resp) {
            resp.render('login.ejs');
        };
    }

    efetuaLogin() {
        return function(req, resp, next) {
            // Lógica de login.
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.render('login.ejs');
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
                    return resp.redirect();
                });
            })(req, resp, next);
        };
    }
}

module.exports = BaseControl;