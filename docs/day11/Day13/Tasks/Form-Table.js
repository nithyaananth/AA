document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
 
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const gender = document.getElementById("gender").value;
    const food = Array.from(document.getElementById("food").selectedOptions).map(option => option.value);
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;
  
    
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${address}</td>
      <td>${pincode}</td>
      <td>${gender}</td>
      <td>${food.join(", ")}</td>
      <td>${state}</td>
      <td>${country}</td>
    `;
  
    // Append row to the table body
    document.querySelector("#dataTable tbody").appendChild(newRow);
  
   
    document.getElementById("myForm").reset();
  });
  