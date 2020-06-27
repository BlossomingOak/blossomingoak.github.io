const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=44a5f82f2808279f5247f34b8c95a2bf";
    fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
        });