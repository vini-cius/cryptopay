class PagamentoModel {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve,reject) => {
            var sql = 'select valor, moeda, confirmacoes, dt_criacao from pagamentos';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    salva(pagamento) {
        return new Promise((resolve, reject) => {
            this._db.query(
                `INSERT INTO pagamentos 
                    (valor,moeda,confirmacoes,txid,dt_criacao,id_usuario) 
                VALUES (?,?,?,?,?,?)
                `,
                [
                    pagamento.totalRecebido,
                    pagamento.moeda,
                    pagamento.confirmations,
                    pagamento.txid,
                    now(),
                    1
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível salvar o pagamento!');
                    }
                    resolve();
                }
            )
        });
    }

}

module.exports = PagamentoModel;