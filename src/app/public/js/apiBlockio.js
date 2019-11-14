var settings2 = {
    "url": "https://www.mercadobitcoin.net/api/BTC/ticker/",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};

var settings3 = {
    "url": "https://www.mercadobitcoin.net/api/BTC/day-summary/2019/11/12/",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
};

var lastPrice;

$.ajax(settings2).done(function (res){
    lastPrice = res.ticker.last;

    var balance = $('#balance').html();
    $('#balance2brl').html('R$ ' + (balance * lastPrice).toFixed(2));

    var pendent = $('#pendent').html();
    $('#pendent2brl').html('R$ ' + (pendent * lastPrice).toFixed(2));

    $('#lastPrice').html('R$ '+ parseFloat(lastPrice).toFixed(2));
});

$.ajax(settings3).done(function (res){
    var open = res.opening;

    if(open < lastPrice){
        var indicador = "+";
        var change = lastPrice - open;
        var percent = change / open;
        percent = percent * 100;
        percent = parseFloat(percent).toFixed(2)
        var color = "green"
    }
    else{
        var indicador = "-";
        var change = lastPrice - open;
        var percent = change / open;
        percent = percent * 100;
        percent = parseFloat(percent)
        var color = "red"
    }

    $('#percent').html(indicador + percent +' %');
    $('#percent').css('color',color);
});