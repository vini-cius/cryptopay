'use strict';

class AuthyControl {
    efetuaLogin() {
        return function(req, resp, next) {
            // Lógica de login.
            const passport = req.passport;
            passport.authenticate('local', (erro, usuario, info) => {
                if (info) {
                    return resp.render('../views/login.ejs');
                }

                if (erro) {
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if (erro) {
                        return next(erro);
                    }
                    return resp.redirect('/dashboard');
                });
            })(req, resp, next);
        };
    }
}

module.exports = AuthyControl;