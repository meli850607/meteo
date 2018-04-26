"use strict"

function search() {

// $(document).ready(function() {
//   $('#submitWeather').click(function() {
    var city = $("#city").val();
    if (city != '') {

      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=fr&units=metric" + "&appid=3a3255d86f5d921cd5f2526dcdd05977",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {
          var widget = show(data);
          $("#show").html(widget);
          $("#city").val('');


          if (data.weather[0].icon === "01d") {
            document.getElementById('container').style.backgroundImage = 'url(img/soleil.gif)'

          } else if (data.weather[0].icon === "01n") {
            document.getElementById('container').style.backgroundImage = 'url(img/500x200.gif)'

          } else if (data.weather[0].icon === "02d") {
            document.getElementById('container').style.backgroundImage = 'url(img/soleil.gif)'

          } else if (data.weather[0].icon === "02n") {
            document.getElementById('container').style.backgroundImage = 'url(img/500x200.gif)'

          } else if (data.weather[0].icon === "03d") {
            document.getElementById('container').style.backgroundImage = 'url(img/nuage.gif)'

          } else if (data.weather[0].icon === "03n") {
            document.getElementById('container').style.backgroundImage = 'url(img/nuagenuit.gif)'

          } else if (data.weather[0].icon === "04d") {
              document.getElementById('container').style.backgroundImage = 'url(img/nuage.gif)'

          } else if (data.weather[0].icon === "04n") {
              document.getElementById('container').style.backgroundImage = 'url(img/nuagenuit.gif)'

          } else if (data.weather[0].icon === "09d") {
            document.getElementById('container').style.backgroundImage = 'url(img/pluie.gif)'

          } else if (data.weather[0].icon === "09n") {
            document.getElementById('container').style.backgroundImage = 'url(img/nuitpluie.gif)'

          } else if (data.weather[0].icon === "10d") {
            document.getElementById('container').style.backgroundImage = 'url(img/pluie.gif)'

          } else if (data.weather[0].icon === "10n") {
            document.getElementById('container').style.backgroundImage = 'url(img/nuitpluie.gif)'

          } else if (data.weather[0].icon === "11d") {
            document.getElementById('container').style.backgroundImage = 'url(img/orage.gif'

          } else if (data.weather[0].icon === "11n") {
            document.getElementById('container').style.backgroundImage = 'url(img/oragenuit.gif)'

          } else if (data.weather[0].icon === "13d") {
            document.getElementById('container').style.backgroundImage = 'url(img/neigejour.gif)'

          } else if (data.weather[0].icon === "13n") {
            document.getElementById('container').style.backgroundImage = 'url(img/neigenuit.gif)'

          } else if (data.weather[0].icon === "50d") {
            document.getElementById('container').style.backgroundImage = 'url(img/brume.gif)'

          } else if (data.weather[0].icon === "50n") {
            document.getElementById('container').style.backgroundImage = 'url(img/brumenuit.gif)'
          }else{

          }
        }
      });

    } else {
      $("#error").html('Cette case ne peut pas être vide');
    }

  };

//fonction affiche météo
function show(data) {

  return  "<h3 style='font-size:40px; font-weight: bold;' class='text-center'>La Météo à : " + data.name + " , " + data.sys.country + "</h3>" +
          "<h3><strong>Weather</strong>" + " : " + data.weather[0].main + "</h3>" +
          "<h3><strong>Météo</strong>" + " : " + data.weather[0].description + "</h3>" +
          "<h3><strong>Température</strong>" + " : " + data.main.temp + "&deg;C</h3>" +
          "<h3><strong>Pression</strong>" + " : " + data.main.pressure + "hPa</h3>" +
          "<h3><strong>Humidité</strong>" + " : " + data.main.humidity + "%</h3>" +
          "<h3><strong>Température maximale</strong>" + " : " + data.main.temp_max + "&deg;C</h3>" +
          "<h3><strong>Température minimale</strong>" + " : " + data.main.temp_min + "&deg;C</h3>" +
          "<h3><strong>Vitesse du vent</strong>" + " : " + data.wind.speed + "m/s</h3>" +
          "<h3><strong>Direction du vent</strong>" + " : " + data.wind.deg + "&deg;</h3>";/* +
          "<h3><strong>Weather</strong>" + " : " + data.weather[0].icon + "</h3>"*/


}


                var input = document.getElementById('city');
                   input.addEventListener('keypress', function(event) {
                     if (event.keyCode === 13) {
                         console.log('ok');
                         search();
                     }})

/*var weather = data.weather.main;
switch(weather){
  case 'Clear':
    document.getElementByClassName('container').style.backgroundImage = url(img/cielbleu.jpg);
    break;
  case 'Clouds':
    document.getElementByClassName('container').style.backgroundImage = url(img/nuageux.jpg);
    break;
  case 'Thunderstorm':
    document.getElementByClassName('container').style.backgroundImage = url(img/orage.jpg);
    break;
  case 'Rain':
    document.getElementByClassName('container').style.backgroundImage = url(img/pluie.jpeg);
    break;
  case 'Drizzle':
    document.getElementByClassName('container').style.backgroundImage = url(img/pluie.jpeg);
    break;
  default:
    document.getElementByClassName('container').style.backgroundImage = url(img/plage.jpg);
    break;
  }
}*/

//http://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=3a3255d86f5d921cd5f2526dcdd05977
