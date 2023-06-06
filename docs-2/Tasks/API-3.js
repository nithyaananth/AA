const getDataButton = document.getElementById('getDataButton');
const dataContainer = document.getElementById('dataContainer');

getDataButton.addEventListener('click', fetchData);

function fetchData() {
  fetch('https://api.carbonintensity.org.uk/intensity/2017-09-18T12:00Z/2017-10-01T12:00Z')
    .then(response => {
      if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
      }
      return response.json();
    })
    .then(data => {
      // Process and display the necessary data
      const intensityData = data.data;

      let html = '<ul>';
      intensityData.forEach(item => {
        html += `<li>Date: ${item.from} - Intensity: ${item.intensity.forecast} gCO2/kWh</li>`;
      });
      html += '</ul>';

      dataContainer.innerHTML = html;
    })
    .catch(error => {
      console.log('Error:', error);
      dataContainer.innerHTML = 'An error occurred while fetching the data.';
    });
}
