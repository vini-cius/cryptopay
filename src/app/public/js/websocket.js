"use strict";

const ws = new WebSocket('wss://n.block.io/');

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
                    <td><img src="images/bitcoin-logo.png" /> ${totalRecebido}</td>
                    <td>R$ 5,00</td>
                    <td>TXID: <a href="https://chain.so/tx/btctest/${txid}" target="_blank">${txid.substring(0,8)}...</a></td>
                </tr>`
            );

            $('#bucket').find('tr:gt(10)').remove();
            
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


/*function servo() {
    let TextVar = "192.168.15.8"
    let ArduinoVar = "http://" + TextVar + ":80";
    $.get( ArduinoVar, { "sr1": 100 });
}*/