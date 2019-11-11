class PagamentoModel {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve,reject) => {
            let sql = 'select valor, moeda, confirmacoes, dt_criacao from pagamentos';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }
}

module.exports = PagamentoModel;