const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=44a5f82f2808279f5247f34b8c95a2bf';
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);

            function inFarenheight(temp){
                x = (294.15 * temp - 273.15) * (9/5) + 32;
                return x;
            }

            const weather = jsonObject["weather"];
            const main = jsonObject["main"];
            const wind = jsonObject["wind"];
            
            let summary = document.createElement('div');
            let currentDescription = document.createElement('p');
            let high = document.createElement('p');
            let humidity = document.createElement('p');
            let windspeed = document.createElement('p');
            
            currentDescription.textContent = 'Current: ' + weather.description;
            high.textContent = 'High of ' + inFarenheight(main.temp_max) + ' F';
            humidity.textContent = 'Humidity: ' + main.humidity + '%';
            wind.textContent = 'Windspeed: ' + wind.speed + 'mph';
            
            summary.appendChild(currentDescription);
            summary.appendChild(high);
            summary.appendChild(humidity);
            summary.appendChild(windspeed);
            
            document.querySelector(weatherSummary).appendChild(summary);
        });


