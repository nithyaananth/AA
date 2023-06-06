const flightContainer = document.getElementById('flightContainer');

fetchData()
  .then(data => displayFlights(data))
  .catch(error => {
    console.log('Error:', error);
    flightContainer.innerHTML = 'An error occurred while fetching the data.';
  });

function fetchData() {
  return fetch('https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226')
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
      }
      return response.json();
    });
}

function displayFlights(data) {
  const flights = data.states;

  let html = '<table class="table">';
  html += '<thead><tr><th>Flight</th><th>Country</th><th>Longitude</th><th>Latitude</th><th>Altitude</th></tr></thead>';
  html += '<tbody>';

  flights.forEach(flight => {
    const [icao24, callsign, originCountry, longitude, latitude, altitude] = flight;

    html += `
      <tr>
        <td>${callsign}</td>
        <td>${originCountry}</td>
        <td>${longitude.toFixed(4)}</td>
        <td>${latitude.toFixed(4)}</td>
        <td>${altitude.toFixed(2)} m</td>
      </tr>
    `;
  });

  html += '</tbody></table>';

  flightContainer.innerHTML = html;
}
