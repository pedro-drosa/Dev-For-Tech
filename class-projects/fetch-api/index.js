const apiKey = 'add unique key here :p';
const cityEl = document.querySelector('#city');
const temperatureEl = document.querySelector('#temperature');
urlMain = 'https://api.openweathermap.org/data/2.5/weather';
const units = 'metric';

navigator.geolocation.getCurrentPosition(loadingUrl);

function loadingUrl(pos) {
  let lat = pos.coords.latitude;
  let long = pos.coords.longitude;
  let url = `${urlMain}?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`;
  fetchApi(url);
}

async function fetchApi(url) {
  const response = await fetch(url);
  let { main, name } = await response.json();
  let temperature = main.temp.toFixed(1);
  cityEl.innerText = `${name}`;
  temperatureEl.innerText = `${temperature} °C`;
}
