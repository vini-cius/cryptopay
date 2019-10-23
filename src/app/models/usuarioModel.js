class UsuarioModel {
    constructor(db) {
        this._db = db;
    }

    buscaPorUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this._db.query(
                `SELECT * FROM usuarios WHERE usuario = ?`,[usuario],
                (erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    return resolve(usuario);
                }
            )
        });
    }
}

module.exports = UsuarioModel;