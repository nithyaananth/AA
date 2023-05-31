// Function to create a card with country data
function createCountryCard(country) {
    const card = document.createElement('div');
    card.classList.add('card', 'col-lg-4', 'col-sm-12');
  
    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.innerText = country.name.common;
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
  
    const capital = document.createElement('p');
    capital.innerText = `Capital: ${country.capital}`;
  
    const latlng = document.createElement('p');
    latlng.innerText = `Latlng: ${country.latlng.join(', ')}`;
  
    const flag = document.createElement('img');
    flag.src = country.flags.png;
    flag.classList.add('flag');
  
    const region = document.createElement('p');
    region.innerText = `Region: ${country.region}`;
  
    const countryCodes = document.createElement('p');
    countryCodes.innerText = `Country Codes: ${Object.keys(country.cca3).join(', ')}`;
  
    const weatherButton = document.createElement('button');
    weatherButton.classList.add('btn', 'btn-primary');
    weatherButton.innerText = 'Click for Weather';
  
    // Event listener for weather button click
    weatherButton.addEventListener('click', () => {
      getWeather(country);
    });
  
    cardBody.append(capital, latlng, flag, region, countryCodes, weatherButton);
    card.append(cardHeader, cardBody);
  
    return card;
  }
  
  // Function to get weather data from OpenWeatherMap API
  function getWeather(country) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your OpenWeatherMap API key
    const [lat, lng] = country.latlng;
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(weatherData => {
        displayWeather(country.name.common, weatherData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Function to display weather data in a Bootstrap modal
  function displayWeather(countryName, weatherData) {
    const modalBody = document.createElement('div');
  
    const temperature = document.createElement('p');
    temperature.innerText = `Temperature: ${weatherData.main.temp}°C`;
  
    const humidity = document.createElement('p');
    humidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
  
    modalBody.append(temperature, humidity);
  
    // Create and open a Bootstrap modal
    const modal = new bootstrap.Modal(document.getElementById('weatherModal'));
    document.getElementById('modalTitle').innerText = `Weather in ${countryName}`;
    document.getElementById('modalBody').innerHTML = '';
    document.getElementById('modalBody').appendChild(modalBody);
    modal.show();
  }
  
  // Function to fetch countries data from the REST Countries API
  function fetchCountriesData() {
    const apiUrl = 'https://restcountries.com/v3.1/all';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('container');
  
        data.forEach(country => {
          const card = createCountryCard(country);
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  // Call the fetchCountriesData function when the page is loaded
  window.onload = fetchCountriesData;
  