const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject["towns"];
  


//Preston
for (let i = 0; i < 3; i++) {
    if(i==0){
        var x=4;
        var id= '#first';
    } else if (i == 1){
        var x = 1;
        var id = '#second';
    } else {
        var x = 5;
        var id = '#third';
    }
    let cardtext = document.createElement('div');
    let name = document.createElement('h2');
    let motto = document.createElement('motto');
    let yearFounded = document.createElement('p');
    let currentPopulation = document.createElement('p');
    let averageRainfall = document.createElement('p');

    name.textContent = town[x].name;
    motto.textContent = town[x].motto;
    yearFounded.textContent = 'Year Founded: ' + town[x].yearFounded;
    currentPopulation.textContent = 'Population: ' + town[x].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall' + town[x].averageRainfall;
    cardtext.appendChild(name);
    cardtext.appendChild(motto);
    cardtext.appendChild(yearFounded);
    cardtext.appendChild(currentPopulation);
    cardtext.appendChild(averageRainfall);
    cardtext.className = "cardtext";

    document.querySelector(id).appendChild(cardtext);
}});