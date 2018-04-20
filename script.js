"use strict"
$(document).ready(function() {
  $('#submitWeather').click(function() {
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
        }
      });

    } else {
      $("#error").html('cette case ne peut pas être vide');
    }

  });

});

function show(data){
          return "<h3 style='font-size:40px; font-weight: bold;' class='text-center'>La Météo à: " +
            data.name + ", " + data.sys.country + "</h3>" +

    "<h3><strong>Météo</strong>: "+ data.weather[0].description +"</h3>" +
    "<h3><strong>Température</strong>: " + data.main.temp + "&deg;C</h3>" +
    "<h3><strong>Pression</strong>: " + data.main.pressure + "hPa</h3>" +
    "<h3><strong>Humidité</strong>: " + data.main.humidity + "%</h3>" +
    "<h3><strong>Température maximale</strong>: " + data.main.temp_max + "&deg;C</h3>" +
    "<h3><strong>Température minimale</strong>: " + data.main.temp_min + "&deg;C</h3>" +
    "<h3><strong>Vitesse du vent</strong>: " + data.wind.speed + "m/s</h3>" +
    "<h3><strong>Direction du vent</strong>: " + data.wind.deg + "&deg;C</h3>";

}

//http://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=3a3255d86f5d921cd5f2526dcdd05977
