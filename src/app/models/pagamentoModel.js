class PagamentoModel {
    constructor(db) {
        this._db = db;
    }

    lista(){
        return new Promise((resolve,reject) => {
            let sql = 'SELECT network, amount, confirmations, dt_received FROM payments_received';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    totalGanhos(){
        return new Promise((resolve, reject) => {
            let sql = `SELECT round(sum(amount),8) as valor FROM payments_received 
                        WHERE day(dt_received) = day(NOW()) AND MONTH(dt_received) = MONTH(NOW());`;
            this._db.query(sql, function(erro, resultados){
                if(erro) return reject('Erro total de ganhos');
                return resolve(resultados);
            });
        });
    }
}

module.exports = PagamentoModel;