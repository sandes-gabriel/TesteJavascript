$(document).ready(function () {
    valorCotacao();
});

function valorCotacao() {

    $.get("https://chain.so/api/v2/get_price/BTC/USD", function (response) {
        var precos = (response.data.prices);

        precos.forEach(function (preco, index) {
            if (preco.exchange == "bitfinex") {
                $("#valorCotacao").html(preco.price);
            }
        });
    }, "json");
}