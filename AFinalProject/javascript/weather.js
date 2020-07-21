function inFarenheight(temp){
    x = (temp * (9/5)) - 459.67;
    return x.toFixed(1);
}
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=44a5f82f2808279f5247f34b8c95a2bf';
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
