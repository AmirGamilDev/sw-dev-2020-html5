const BASE_URL = "https://api.openweathermap.org/data/2.5";

const WEATHER_ENDPOINT = "/weather";

const FORECAST_ENDPOINT = "/forecast";

const APP_ID = "8097f3f7cfb0a07b8001162728cfd6cd";

window.addEventListener("load", function(event) {
    var geolocation = navigator.geolocation;

	if (geolocation) {
		try {
			geolocation.getCurrentPosition(
                successCallback,
                errorCallback
		);
		} catch (err) {
            console.log(err.message);

			coords.innerHTML = '<p>Error</p>';
		}
	} else {
		coords.innerHTML = '<p>Your browser does not support geolocation.</p>';
	}
});

function loadJson(url, data, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);

	xhr.onload = function() {
		callback( JSON.parse(xhr.responseText) );
	}

	xhr.send( JSON.stringify(data) );
}

function loadWeather(lat, lon) {

    var parameters = "?appid=" + APP_ID + "&lat=" + lat + "&lon=" + lon;

	var weatherUrl = BASE_URL + WEATHER_ENDPOINT + parameters;

	loadJson(weatherUrl, null, showWeatherData);

    var forecastUrl = BASE_URL + FORECAST_ENDPOINT + parameters;

    loadJson(forecastUrl, null, showForecastData);
}

function showWeatherData(data) {
    console.log(data);

    address.innerHTML = "Location: " + data.name;

    temp.innerHTML = "Temperature: " + kelvinToCelsius(data.main.temp) + " degrees";

    humidity.innerHTML = "Humidity: " + data.main.humidity + "% RH";

    weather.style.display = "block";
}

function showForecastData(data) {
    console.log(data);

    // note: this is quick & dirty - proof of concept ;)

    var forecastTable = "<table><tr><th>Time</th><th>Temperature</th><th>Weather</th></tr>";

    for(let i = 0; i < data.list.length; i++) {
        var element = data.list[i];  // or could just use data.list[i].<whatever-property-we-want>

        forecastTable += "<tr><td>" + element.dt_txt + "</td><td>" + kelvinToCelsius(element.main.temp).toFixed(2) + "</td><td>" + element.weather[0].main + "</td></tr>";
    }

    forecastTable += "</table>";

    forecast.innerHTML = "<p>Forecast:</p>" + forecastTable;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function successCallback(location) {
	coords.innerHTML = "<p>Latitude: " + location.coords.latitude.toFixed(2) + "</p>";
	coords.innerHTML += "<p>Longitude: " +	location.coords.longitude.toFixed(2) + "</p>";

	loadWeather(location.coords.latitude, location.coords.longitude);
 }

 function errorCallback() {
	coords.innerHTML = '<p>There was an error looking up your position</p>';
 }
