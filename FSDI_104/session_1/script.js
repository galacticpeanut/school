// let name=prompt("Name: ");
/*
var age=30;
let status=true;

const address="Calz Tecnologico;"

// name="Robert"; // assignment

console.log(name);

// name="Robert 2"

console.log(name);

console.error("Error message");
console.warn("Warning  message");

console.log(name + " " + age + " " + status); // concatenation
console.log("b" + "a" + + "a" + "a");
console.log("10" - 1);
console.log("111" + "1");

// let x=parseInt(prompt("Number 1:"));
// let y=parseInt(prompt("Number 2:"));

// console.log(x + y);

// loops
// initial value; higher value; incrementation
 for(var i=0; i<= 10; i++) {
  console.log("Hello :) " + i);

  if(i===5) {
    console.log("i==5");
  } else {
    console.log("Legolas");
  }
}
*/

/* let index=parseInt(prompt("Student number: "));
let names = ['Noah', 'Robert', 'Rhenard', 'Liz', 'William', 'Kevin', 'Moein', 'Oliver', 'Sheldon', 'Martin', 'Alfredo', 'Myk'];
let numbers=[1,5,6,8,3];

console.log(numbers[1]+numbers[2]);
// let name=prompt("Name: ");

document.getElementById("message").innerHTML=`<h1> Welcome ${names[index]}</h1>`;
*/

// function declaration
function grader(name = "Studen Name: ",grade="B") {
  console.log(name + ' you got a : ' + grade);
}

grader("Robert", "A");
grader("Oliver", "C");


// function expression

const sum = (num1, num2) => {
  return num1+num2;
}

// arrow function
const multi = (a) => a*5;


let result=sum(10,20 );

console.log(result);

result=multi(5);

console.log(result);

const multiply = (num1,num2) => {
  console.log(num1*num2);
}

multiply(2,2);
multiply(3,3);
multiply(4,4);

function write(id,message) {
  document.getElementById("message").innerHTML = message;
}

write("message"," <h1> Hello </h1> ");


(function(technology){
  console.log("I ame here ... learning " + technology);
})('JS');


// short script script 