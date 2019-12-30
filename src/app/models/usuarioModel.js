class UsuarioModel {
    constructor(db){
        this._db = db;
    }

    login(user){
        return new Promise((resolve, reject) => {
            let sql = 'SELECT user_name, email, pwd FROM users WHERE user_name = ?';
            this._db.query(sql,[user.usuario],(erro, resultados) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o usuário!');
                    }
                    return resolve(resultados);
            });
        });
    }

    lista(){
        return new Promise((resolve,reject) => {
            let sql = `SELECT nome, user_name, email,
                        case when ativo = 1 then 'S' else 'N' end as ativo FROM users`;
            this._db.query(sql,(erro, usuario) => {
                if (erro) {
                    return reject('Erro ao listar os usuários');
                }
                return resolve(usuario);
            });
        });
    }

    salvaUser(user){
        return new Promise((resolve,reject)=>{
            let sql = `insert into users (user_name,email,nome,pwd,dt_criacao,ativo)
            values ('${user.user}','${user.email}','${user.nomeUser}',MD5('Mudar@123'),now(),1)`

            this._db.query(sql,(erro, resultados) => {
                if (erro) {
                    return reject('Erro ao salva o usuário: '+erro);
                }
                return resolve(resultados);
            });
        });       
    }
}

module.exports = UsuarioModel;