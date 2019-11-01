var LocalStrategy = require("passport-local").Strategy;

var bcrypt = require('bcrypt-nodejs');

const UsuarioModel = require('../app/models/usuarioModel.js');
var db = require('./database.js');

const usuarioModel = new UsuarioModel(db);

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        db.query("SELECT * FROM usuarios WHERE uniqkey = ? ", [id],
            function (err, rows) {
                done(err, rows[0]);
            });
    });

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'usuario',
            passwordField: 'senha',
            passReqToCallback: true
        },
            function (req, username, password, done) {
                db.query("SELECT * FROM usuarios WHERE usuario = ? ", [username],
                    function (err, rows) {
                        if (err)
                            return done(err);
                        if (!rows.length) {
                            return done(null, false, req.flash('loginMessage', 'No User Found'));
                        }
                        if (!bcrypt.compareSync(password, rows[0].password))
                            return done(null, false, req.flash('loginMessage', 'Wrong Password'));

                        return done(null, rows[0]);
                    });
            })
    );
};