function inFarenheight(temp){
    x = (temp * (9/5)) - 459.67;
    return x.toFixed(1);
}
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=44a5f82f2808279f5247f34b8c95a2bf';
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            console.table(jsObject);

             

            
            let summary = document.createElement('div');
            let currentDescription = document.getElementById("current").textContent = jsObject.weather[0].description;
            let high = document.getElementById("high").textContent = inFarenheight(jsObject.main.temp);
            let humidity = document.getElementById("humidity").textContent = jsObject.main.humidity ;
            let windspeed = document.getElementById("windspeed").textContent = jsObject.wind.speed;
        });

const ForecastapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=44a5f82f2808279f5247f34b8c95a2bf';
    fetch(ForecastapiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            console.table(jsObject);

            const forecast = jsObject['list'];
            let a = 1;
            for(let i = 5; i < forecast.length; i+=8) {
        
                const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';
                const desc = forecast[i].weather[0].description;
                const temp = inFarenheight(forecast[i].main.temp);

                document.getElementById(`day${a}`).innerHTML = temp + " &deg;F";
                document.getElementById(`dayimg${a}`).setAttribute('src', imagesrc);
                document.getElementById(`dayimg${a}`).setAttribute('alt', desc);
                a += 1;
            }
        });
