function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    // alert(JSON.parse(result))
    let list = JSON.parse(result).results[0].daily
    var table = '<table><tr><th>日期</th><th>天气(白天)</th><th>最高温度</th><th>风向</th></tr>';
    for(var i in list){
        table += '<tr>';
        table += '<td>'+ list[i].date +'</td>';
        table += '<td>'+ list[i].text_day +'</td>';
        table += '<td>'+ list[i].high +' °C</td>';
        table += '<td>'+ list[i].wind_direction +'</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}
var city = localStorage.getItem('city') ? localStorage.getItem('city') : 'beijing'
var url = 'https://api.seniverse.com/v3/weather/daily.json?key=211an6fwwh5dnb4z&location='+ city +'&language=zh-Hans&unit=c&start=0&days=5'
// alert(url)
httpRequest(url, showWeather);