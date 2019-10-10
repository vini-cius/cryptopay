class PagamentoModel {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve,reject) => {
            var sql = 'select valor, moeda, status, data from pagamentos';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    salva(pagamento) {
        return new Promise((resolve, reject) => {
            var sql = "insert into pagamentos (valor, moeda, status, data, txid) values ('"+pagamento.data.amount_received+"','"+pagamento.data.network+"','"+pagamento.data.confirmations+"',now(),'"+pagamento.data.txid+"')";
            
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel gravar');
                return resolve(resultados);
            });
        });
    }
}

module.exports = PagamentoModel;