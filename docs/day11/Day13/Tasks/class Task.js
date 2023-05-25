
//Task1

// let spanColor = document.getElementById('spanColor');

// spanColor.addEventListener('mouseover', function(event) {
//   spanColor.style.color = 'blue';
// });

// spanColor.addEventListener('mouseout', function(event) {
//   spanColor.style.color = 'black'; 
// });

//2.

// let formElement = document.getElementById('formElement');

// formElement.addEventListener('submit',function(event) {
//     event.preventDefault();
//     //console.log(formElement.elements['username'].value);
//     event.target.elements['username'].value='devi';

// })


//Task2

   
    let getInput = document.getElementById('getInput');
    let spanElement = document.getElementById('spaneElement');
 
    
    getInput.addEventListener('click')
  
  


//Task3

// function ShowCoordinates(event) {
//     let header = document.getElementById('header');
//     let x = event.clientX;
//     let y = event.clientY;
//     var spanCoordinates = document.getElementById("coordinates");
//     spanCoordinates.textContent = ' coordinates x: $ + x + ", Y=" + y;
//   }
  

//Task4

function characterCount() {
    let textarea = document.getElementById('textarea');
    console.log(textarea.ariaValueMax.length);
}
