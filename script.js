$(document).ready(function() {
  $("#submitWeather").click(function() {
    var city = $("#city").val();
    if (city != '') {

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&lang=fr&units=metric" + "&appid=3a3255d86f5d921cd5f2526dcdd05977",
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

function show(data) {
    return"<h3><strong>Temps</strong>: "+ data.weather[1].main +"</h3>" +
          "<h3><strong>Temps</strong>: "+ data.weather[2].description +"</h3>"; 
}


/*window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=3a3255d86f5d921cd5f2526dcdd05977')
  .then(res => res.json())
  .then(resjson => console.log(resjson))
*/

//resjson.main.name = document.getElementsByClassName('ville')
