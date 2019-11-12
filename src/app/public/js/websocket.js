'use strict';

//Get last price on BitcoinTrade Exchange
var settings = {
    "url": "https://api.bitcointrade.com.br/v2/public/BRLBTC/ticker",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};

var lastPriceBtc;

$.ajax(settings).done(function (res) {
    lastPriceBtc = res.data.last;
});

const ws = new WebSocket( 'wss://n.block.io/');

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
            $('#bucket tr:first').before(
                `<tr>
                    <td><img src="images/${moeda}-logo.png" /> ${totalRecebido}</td>
                    <td>R$ ${(totalRecebido * lastPriceBtc).toFixed(2)}</td>
                    <td>
                        TXID: <a href="https://chain.so/tx/${moeda}/${txid}" target="_blank">${txid.substring(0,8)}...</a>
                    </td>
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