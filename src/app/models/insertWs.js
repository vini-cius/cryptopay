const db = require('../../config/database.js');

const ws = new WebSocket('wss://n.block.io/');
ws.debug = false;
ws.timeout = 5400;
var subscribed = false;

ws.onmessage = function (msg) {
    msg = JSON.parse(msg.data);

    if (msg.type == 'address') {
        var totalRecebido = parseFloat(msg.data.amount_received);
        var moeda = msg.data.network;
        var txid = msg.data.txid;
        var confirmations = msg.data.confirmations;

        if(confirmations < 1) {
            db.connect(function(err) {
                if (err) throw err;
                console.log("Salvando Pagamento...");
                let sql = "INSERT INTO pagamentos (valor,moeda,confirmacoes,txid,dt_criacao,id_usuario) VALUES ?";
                let values = [totalRecebido,moeda,confirmations,txid,now(),1];

                db.query(sql,[values],function(err,result){
                    if (err) throw err;
                    console.log('Pagamento foi salvo, id: ' + result.insertId);
                });
            });
            
        }
    }

    if (!subscribed && msg.status == 'success') {
        subscribed = true;
        ws.send(JSON.stringify({
            'type': 'address', 
            'network': 'BTCTEST', 
            'address': '2NC8duzvS3Wbz75axmaSADpus4Xqodpv6MF'
        }));
    }
}