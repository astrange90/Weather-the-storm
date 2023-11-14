var APIKey = "15c480b1811ae2e4611abab1f4656985";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch (queryURL)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
});

var formSubmitHandler = function(event) {
    event.preventDefault();
    
}