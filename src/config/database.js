"use strict";

const db = require("mysql");

const conn = db.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'cryptopay'
});

conn.connect(function(err){
	if(err) {
		console.log("Erro ao tentar conectar-se ao banco de dados! " + err);
	} else {
		console.log("Conexão com o banco de dados estabelecida com sucesso!");
	}
});

module.exports = conn;