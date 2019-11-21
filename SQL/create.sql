CREATE TABLE pagamentos (
	uniqkey INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	valor FLOAT NOT NULL,
	moeda VARCHAR(30) NOT NULL,
	confirmacoes VARCHAR(50) NOT NULL,
	dt_criacao DATETIME NOT NULL,
	id_usuario INT NOT NULL 
);

CREATE TABLE moedas (
	uniqkey INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	moeda VARCHAR(100) NOT NULL,
	sigla VARCHAR(20) 
);

CREATE TABLE usuarios (
	uniqkey INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	usuario VARCHAR(100) NOT NULL,
	senha VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	nome VARCHAR(200) NOT NULL,
	dt_criacao DATETIME NOT NULL,
	ativo bit NOT NULL,
	dt_bloqueio DATETIME,
	motivo_bloqueio VARCHAR(200)
);

CREATE TABLE carteiras (
	uniqkey INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	endereco VARCHAR(100) NOT NULL,
	moeda VARCHAR(50) NOT NULL,
	descricao VARCHAR(100),
	ativo bit NOT NULL,
	dt_cadastro DATETIME NOT NULL,
	dt_bloqueio DATETIME,
	id_usuario INT NOT NULL
);