class PagamentoModel {
    constructor(db) {
        this._db = db;
    }

    lista(){
        return new Promise((resolve,reject) => {
            let sql = 'select valor, moeda, confirmacoes, dt_criacao from pagamentos';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    totalGanhos(){
        return new Promise((resolve, reject) => {
            let sql = `SELECT round(sum(valor),8) as valor FROM pagamentos 
                        WHERE day(dt_criacao) = day(NOW()) AND MONTH(dt_criacao) = MONTH(NOW());`;
            this._db.query(sql, function(erro, resultados){
                if(erro) return reject('Erro total de ganhos');
                return resolve(resultados);
            });
        });
    }
}

module.exports = PagamentoModel;