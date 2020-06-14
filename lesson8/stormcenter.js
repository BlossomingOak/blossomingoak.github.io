function adjust(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
function submit() {
    localStorage.fullname = document.getElementById("name").value;

    localStorage.email = document.getElementById("mail").value;

    localStorage.tel = document.getElementById("phone").value;

    localStorage.caseNumber = Math.floor(Math.random() * 999999);

}


function retreive() {
    
    document.getElementById("getName").innerText = localStorage.fullname;

    document.getElementById("getEmail").innerText = localStorage.email;

    document.getElementById("getTel").innerText = localStorage.tel;

    document.getElementById("getCaseNumber").innerText = localStorage.caseNumber;
}