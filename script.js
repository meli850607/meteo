window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=3a3255d86f5d921cd5f2526dcdd05977')
  .then(res => res.json())
  .then(resjson => console.log(resjson))


//resjson(.main.name) = document.getElementsByClassName('ville')
