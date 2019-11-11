class UsuarioModel {
    constructor(db) {
        this._db = db;
    }

    login(user) {
        return new Promise((resolve, reject) => {
            let sql = "SELECT usuario, email, senha FROM usuarios WHERE usuario = '" + user + "'";
            this._db.query(sql,(erro, usuario) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    return resolve(usuario);
            });
        });
    }

    lista() {
        return new Promise((resolve,reject) => {
            let sql = `SELECT nome, usuario, email,
                        case when ativo = 1 then 'S' else 'N' end as ativo FROM USUARIOS`;
            this._db.query(sql,(erro,usuario) => {
                if (erro) {
                    return reject('Erro ao listar os usuários');
                }
                return resolve(usuario);
            });
        });
    }
}

module.exports = UsuarioModel;