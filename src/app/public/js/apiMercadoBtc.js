$('document').ready(function () {

    var settings = {
        "url": "https://www.mercadobitcoin.net/api/BTC/ticker/",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
    };

    var lastPrice;

    $.ajax(settings).done(function (res) {
        lastPrice = res.ticker.last;

        var balance = $('#balance').html();
        $('#balance2brl').html('R$ ' + (balance * lastPrice).toFixed(2));

        var pendent = $('#pendent').html();
        $('#pendent2brl').html('R$ ' + (pendent * lastPrice).toFixed(2));

        $('#lastPrice').html('R$ ' + lastPrice.toLocaleString('en-US', { style: 'currency', currency: 'BRL', maximumSignificantDigits: 2 }));
    });
});