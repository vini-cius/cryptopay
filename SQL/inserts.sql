INSERT INTO pagamentos
(valor,moeda,confirmacoes,dt_criacao,id_usuario)
VALUES
(0.0152222,'BTCTEST',3,now(),1),
(0.0012129,'BTCTEST',3,now(),1)

INSERT INTO moedas 
(moeda,sigla)
VALUES
('Bitcoin','BTC'),
('Bitcoin Test','BTCTEST'),
('Litecoin','LTC'),
('Litecoin Test','LTCTEST');

INSERT INTO moedas 
(moeda,sigla)
VALUES
('Binance Coin','BNB'),
('Ripple','XRP');


INSERT INTO carteiras
(endereco,moeda,descricao,ativo,dt_cadastro,dt_bloqueio,id_usuario)
VALUES
('2NC8duzvS3Wbz75axmaSADpus4Xqodpv6MF','BTCTEST','Block.io',1,NOW(),NULL,1)

INSERT INTO usuarios
(usuario,senha,email,nome,dt_criacao,ativo,dt_bloqueio,motivo_bloqueio)
VALUES
('vinicius','az@123','viniciuskt0@gmail.com','Vinicius de Souza Santos',NOW(),1,NULL,NULL)