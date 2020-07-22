const requestURL = 'rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const town = jsonObject["towns"];
  


//Preston
for (let i = 0; i < 6; i++) {
    
    
    let cardtext = document.createElement('div');
    let name = document.createElement('h2');
    let max = document.createElement('p');
    let halfdayres = document.createElement('p');
    let fulldayres = document.createElement('p');
    let halfdaywalkin = document.createElement('p');
    let fulldaywalkin = document.createElement('p');

    name.textContent = 'Vehicle: ' + town[x].name;
    max.textContent = 'Max Persons: ' + town[x].max;
    halfdayres.textContent = 'Half Day Reserved Price: ' + town[x].halfdayres;
    fulldayres.textContent = 'Full Day Reserved Price: ' + town[x].fulldayres;
    halfdaywalkin.textContent = 'Half Day Walk-In Price: ' + town[x].halfdaywalkin;
    fulldaywalkin.textContent = 'Full Day Walk-In Price: ' + town[x].fulldaywalkin;
   
    cardtext.appendChild(name);
    cardtext.appendChild(max);
    cardtext.appendChild(halfdayres);
    cardtext.appendChild(fulldayres);
    cardtext.appendChild(halfdaywalkin);
    cardtext.appendChild(fulldaywalkin);
    cardtext.className = "cardtext";

    document.querySelector(id).appendChild(cardtext);
}});