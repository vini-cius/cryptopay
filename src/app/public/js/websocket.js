"use strict";

const ws = new WebSocket('wss://n.block.io/');

const db = require('../../../config/database.js');


ws.debug = false;
ws.timeout = 5400;
var subscribed = false;

//$.ajaxSetup({timeout:1000});

ws.onmessage = function (msg) {
    msg = JSON.parse(msg.data);

    if (msg.type == 'address') {
        var totalRecebido = parseFloat(msg.data.amount_received);
        var moeda = msg.data.network;
        var txid = msg.data.txid;
        var confirmations = msg.data.confirmations;

        if(confirmations < 1) {
            $('#bucket tr:first').before(
                `<tr>
                    <td><img src="images/bitcoin-logo.png" /></td>
                    <td>${totalRecebido}</td>
                    <td><a href="https://chain.so/tx/btctest/${txid}" target="_blank">TXID</a></td>
                </tr>`
            );

            $('#bucket').find('tr:gt(10)').remove();

            
            db.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO pagamentos (valor, moeda) VALUES ("+totalRecebido+","+moeda+")";
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
            });

            //servo();
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

function salvaPagamento(){

}

/*function servo() {
    let TextVar = "192.168.15.8"
    let ArduinoVar = "http://" + TextVar + ":80";
    $.get( ArduinoVar, { "sr1": 100 });
}*/