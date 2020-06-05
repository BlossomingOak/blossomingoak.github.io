function toggleMenu() {
    document.getElementById("nav").classList.toggle("open");
}

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let x = today.getDay();
let thisDay = days[x];
let thisMonth = months[today.getMonth()];

let date = thisDay + ", " + today.getDate() + " " + thisMonth + " " + today.getFullYear();
document.getElementById("date").innerHTML = date; 








