window.addEventListener("load", onLoad);

function onLoad(event) {
    var button = document.getElementById("button");

    button.addEventListener("click", getLocation);
}

function getLocation(event) {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, geolocationError);
    } else {
        var para = document.getElementById("paragraph");

        para.innerHTML = "Geolocation is not supported in this browser";
    }
}

function showPosition(position) {
    var para = document.getElementById("paragraph");

    para.innerHTML = "Latitude: " + position.coords.latitude
        + "<br>Longitude: " + position.coords.longitude;
}

function geolocationError(locationError) {
    console.log(locationError);
}
