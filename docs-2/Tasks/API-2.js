const jewelryContainer = document.getElementById('jewelryContainer');
const electronicsContainer = document.getElementById('electronicsContainer');
const clothingContainer = document.getElementById('clothingContainer');

fetchData('jewelery', jewelryContainer);
fetchData('electronics', electronicsContainer);
fetchData('clothing', clothingContainer);

function fetchData(category, container) {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
   
      const products = data;

      let html = '<div class="card-deck">';
      products.forEach(product => {
        html += `
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">Price: $${product.price}</p>
            </div>
          </div>
        `;
      });
      html += '</div>';

      container.innerHTML = html;
    })
    .catch(error => {
      console.log('Error:', error);
      container.innerHTML = 'An error occurred while fetching the data.';
    });
}
