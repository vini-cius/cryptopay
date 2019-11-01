class UsuarioModel {
    constructor(db) {
        this._db = db;
    }

    buscaPorUsuario(usuario) {
        return new Promise((resolve, reject) => {
            var sql = 'SELECT * FROM usuarios WHERE usuario = ?'
            this._db.query(sql,[usuario],(erro, usuario) => {
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