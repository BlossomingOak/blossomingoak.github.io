const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject["towns"];

//Marvel helped me out with this code

        var x = 1;
        var eventid = '#fishevent';
    
    for (let i=0; i<jsonObject.towns[x].events.length; i++){
    let eheader = document.createElement('h5');
    let eparagraph = document.createElement('p');
    eheader.textContent = town[x].events[i].split(":", 2)[0];
    eparagraph.textContent = town[x].events[i].split(":", 2)[1];

    document.querySelector(eventid).appendChild(eheader);
    document.querySelector(eventid).appendChild(eparagraph);  
}});
