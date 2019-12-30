class CarteiraModel {
    constructor(db) {
        this._db = db;
    }

    lista(){
        return new Promise((resolve,reject) => {
            let sql = `SELECT id_wallet, address, network, exchange,
                case when ativo = 1 then "S" else "N" end as ativo, 
                dt_cadastro, user_cadastro FROM wallets`
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }

    listaMoeda(){
        return new Promise((resolve,reject) =>{
            let sql = 'select id_network,network,sigla from networks';
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados);
            });
        });
    }
}

module.exports = CarteiraModel;