function windChill(){
    let temp = parseFloat(document.getElementById("high").innerHTML);
    let speed = parseFloat(document.getElementById("windspeed").innerHTML);
    alert(speed);
    alert(temp);
    if (temp <= 50 && speed >= 3){
        let s = Math.pow(speed, 0.16);
        let f = (35.74) + (0.6215 * temp) - (35.75 * s) + (0.4275 * temp * s);
        document.getElementById("windchill").innerHTML = Math.round(f);
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
    
}