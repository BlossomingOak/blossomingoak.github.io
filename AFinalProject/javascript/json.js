const requestURL = 'https://blossomingoak.github.io/AFinalProject/javascript/rental.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const Rental = jsonObject["Rentals"];
  


//Preston
for (let i = 0; i < 6; i++) {
    
    
    let cardtext = document.createElement('div');
    let name = document.createElement('h6');
    let max = document.createElement('p');
    let halfdayres = document.createElement('p');
    let fulldayres = document.createElement('p');
    let halfdaywalkin = document.createElement('p');
    let fulldaywalkin = document.createElement('p');

    name.textContent = 'Vehicle: ' + Rental[i].name;
    max.textContent = 'Max Persons: ' + Rental[i].max;
    halfdayres.textContent = 'Half Day Reserved Price: ' + Rental[i].halfdayres;
    fulldayres.textContent = 'Full Day Reserved Price: ' + Rental[i].fulldayres;
    halfdaywalkin.textContent = 'Half Day Walk-In Price: ' + Rental[i].halfdaywalkin;
    fulldaywalkin.textContent = 'Full Day Walk-In Price: ' + Rental[i].fulldaywalkin;
   
    cardtext.appendChild(name);
    cardtext.appendChild(max);
    cardtext.appendChild(halfdayres);
    cardtext.appendChild(fulldayres);
    cardtext.appendChild(halfdaywalkin);
    cardtext.appendChild(fulldaywalkin);
    cardtext.className = "cardtext";

    document.querySelector('#vehicleinfo').appendChild(cardtext);
}});