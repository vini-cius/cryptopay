CREATE TABLE PAYMENTS_RECEIVED (
	id_pay INT PRIMARY KEY identity(1,1) NOT NULL,
	network varchar(30) not null,
	[address] varchar(150) not null,
	amount numeric(10,8) NOT NULL,
	txid varchar(250) not null,
	confirmations int NOT NULL,
	dt_received DATETIME NOT NULL,
	user_receiver INT NOT NULL 
);

CREATE TABLE NETWORKS (
	id_network INT PRIMARY KEY identity(1,1) NOT NULL,
	network VARCHAR(100) NOT NULL,
	acronym VARCHAR(20) 
);

CREATE TABLE USERS (
	id_user INT PRIMARY KEY identity(1,1) NOT NULL,
	[user] VARCHAR(100) NOT NULL,
	pwd VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	[name] VARCHAR(200) NOT NULL,
	dt_create DATETIME NOT NULL,
	active bit NOT NULL,
	dt_block DATETIME,
	block_reason VARCHAR(200)
);

CREATE TABLE WALLETS (
	id_wallet INT PRIMARY KEY identity(1,1) NOT NULL,
	[address] varchar(150) not null,
	network varchar(30) not null,
	exchange VARCHAR(100),
	active bit NOT NULL,
	dt_register DATETIME NOT NULL,
	dt_block DATETIME,
	user_register INT NOT NULL
);