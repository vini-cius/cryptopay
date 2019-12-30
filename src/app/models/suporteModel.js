class SuporteModel {
    constructor(db) {
        this._db = db;
    }

    listaChamados(){
        return new Promise((resolve,reject) => {
            let sql = `SELECT user_solicitante,dt_criacao,assunto,SC.descricao FROM CHAMADOS C
            INNER JOIN status_chamado SC ON C.status_chamado = SC.id_status_chamado `
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    criaChamado(chamado){
        return new Promise((resolve,reject) =>{
            let sql = `INSERT INTO chamados (user_solicitante,dt_criacao,assunto,status_chamado)
            VALUES (1,now(),'${chamado.assunto}',1)`;
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Erro ao gravar o chamado: ' + erro);
                return resolve(resultados);
            });
        });
    }
}

module.exports = SuporteModel;