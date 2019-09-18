/*const today = new Date();

let value=today;

value=today.getMonth();
value=today.getDay();

let days=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days[value]);

value = today.getFullYear();
console.log(value);

value = today.getDate();
console.log(value);

value=today.getHours();
console.log(value);

value=today.getMinutes();
console.log(value);

value=today.getSeconds();
console.log(value);

const score=1000;
const logged=true;


if(logged) {
  console.log('the user is logged');
} else {
  console.log('You need to log in');
}

console.log(logged ? 'the user is logged':'You need to log in');
let age=21;
if(age>=18){
  console.log('You are an adult');
} else {
  console.log('You are a kid');
}

let money=600;
let total=500;
let card=true;

if(money>total){
  console.log('Successful transaction');
} else if (card) {
  console.log('You pay with a credit card');
} else {
  console.log('Insufficient money');
}

let hour=25;

// && mean AND
// || mean OR
if(hour>0 && hour <= 12) {
  console.log('Good morning!');
} else if (hour > 12 && hour <= 18) {
  console.log('Good evening!');
} else if (hour  > 18 && hour <=24) {
  console.log('Good night');
} else {
  console.log('Incorrect !!!');
}

const payMethod = 'debit';

// Switch - case
switch(payMethod) {
  case 'cash': console.log(`You path with ${payMethod}`);
              break;
  case 'credit' : console.log(`You path with ${payMethod}, wait a minute ... `);
              break;
  case 'debit' : console.log(`You pay with ${payMethod}, processing ... `);
              break;
  default: console.log('Invalid option');
              break;
}
*/
//random number

function dices() {
  let dice1 = Math.ceil(Math.random()*6);
  let dice2 = Math.ceil(Math.random()* 6);

//  console.log(dice1);
//  console.log(dice2);

  document.getElementById('dice1').innerHTML=`<img class="dice-img" src="img/${dice1}.png">`;
  document.getElementById('dice2').innerHTML=`<img class="dice-img" src="img/${dice2}.png">`;
  
  
  /*
  switch(dice1){
    case 1: document.getElementById('dice1').innerHTML='<img class="dice-img" src="img/one.png">';
            break;
    default: document.getElementById('dice1').innerHTML="<p> It's different form 1 </p>";
            break;
  }
  */
}

dices();