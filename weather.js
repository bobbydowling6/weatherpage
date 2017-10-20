function weatherReceived(response) {
    console.log(response);

    var firstResult = response.query.results.channel.item.condition
    console.log(firstResult);

    var location = 'Unknown' // not returned in response
    var temp = firstResult.temp
    var text = firstResult.text

    var x = ('The temperature is ' + temp + '. Forecast calls for ' + text + ' for today');

    document.getElementById('output').innerHTML = x;
}

$("form").submit(function (event) {
    event.preventDefault();

    url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + $("#cityinput").val() + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
    $.getJSON(url, weatherReceived);

});
