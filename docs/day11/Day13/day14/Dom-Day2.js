
//1.
//console.log(window.localStorage)
//console.log(window);
//console.log(window.location);

//console.log(window.location.href); //current page ur1

//console.log(window.location.hostname);
//console.log(window.location.protocol);

//console.log(window.location.search); //query parameters

//console.log(window.location);
//window.localStorage.clear();

//window.localStorage.setItem('username','sathish');

//console.log(window.localStorage.getItem('username'));

//window.localStorage.removeItem('username');

//window.localStorage.setItem('isLoggedIn','true');

//console.log(window.localStorage);

//2.
// setTimeout

// let sayHello = () => {
//     console.log('after five seconds');
// }

// window.setTimeout( sayHello,5000);

//3.
//  let sayHello = () => {
//     console.log('hello');
//  };

// window.setInterval( sayHello,1000);


//window.clearInterval(sayHelloID)



//4.

//10 9 8 7 6 5 4 3 2 1 Happy New Year

// function countDownTimer(seconds) {
//     if (seconds > 0) {

//         console.log(seconds);
//   setTimeout (() =>  {
//     countDownTimer(seconds-1);
//     }, 1000);
//  } else {
//         console.log('Happy New Year');
//     }

// }
 
//countDownTimer(10);




//5. another method

// let seconds = 10;

// let countDownTimer = setInterval(() => {
//     if (seconds > 0) {
//         console.log(seconds);
//         seconds--;

//     } else {
//         clearInterval(countDownTimer);
//         console.log('Happy New Year');
//     }
//     }, 1000);




//6. another method


// let seconds = 10;

// let timer = setInterval(() => {
//     console.log(seconds);
//     seconds--;
// }, 10000);

// setTimeout(() => {
//     clearInterval(timer);
//     setTimeout(() => {
//         console.log('Happy New Year');
 
//     }, 1000); 
    
// }, 10000);



//1.
//prompt, alert, confirm


// let name = prompt('your name?');

// console.log(name);


//2.
// alert ('hi')

// let confirmAnswer = confirm('Are you sure?');

//  if (cofirmAnswer) {
//      //user clicked ok
//     console.log('clicked ok');
// } else {
//     //user clicked Cancel
//     console.log('clicked Cancel');

// }
// console.log(confirm);



//console.log(window.innerWidth, window.innerHeight);

// document.body.innerHTML=`<h1>Hello</h1>`;



