class CarteiraModel {
    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve,reject) => {
            var sql = `select uniqkey, endereco, moeda, descricao, 
                case when ativo = 1 then "S" else "N" end as ativo, 
                dt_cadastro user_cadastro from carteiras`
            this._db.query(sql,function(erro,resultados){
                if(erro) return reject('Não foi possivel listar');
                return resolve(resultados)
            });
        });
    }
}

module.exports = CarteiraModel;