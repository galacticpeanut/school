
// imports
var math = require("./myMathLib");

//console.log("Hello from NodeJS");

function test() {
 // console.log("Hello, I'm a fn");
}

function helloMe(name) {
//  console.log("Hello & Welcome", name)
}

 function printSomeEvens(howMany) {
    for (var i = 0;i < (howMany * 2);i+=2) {
      math.isItEven(i) ? console.log(i) : null;
  }
 }

function init() {
  helloMe("Robert");

  var res = math.lowestNumber(21, 3);
 // console.log(res);

  var res2 = math.sum(21, 21);
 // console.log(res2);

  var res3 = math.divide(10, 2);
 // console.log(res3);
  var res4 = math.divide(10, 0);
 // console.log(res4);
  var res5 = math.divide(0, 40);
 // console.log(res5);


  // usage of lib
  // console.log(math.version());
  var numbs = [1912, 289, 12398,2340970,123409,0987123] 
  var low = math.lowestInArray(numbs);
  //console.log(low);

/*   var low = math.lowestInArry(numbs);
  console.log(low); */

  //console.log(math.isItEven(2));
  //console.log(math.isItEven(3));
  //console.log(math.isItEven(0));
  //console.log(math.isItEven(5));
  //console.log(math.isItEven(6));
  //console.log(math.isItEven(1000));
  //console.log(math.isItEven(99999));
  //console.log(math.isItEven(3.14));

  printSomeEvens(3);
  printSomeEvens(120000);
}

init();


/**
 * 
 *  Console tricks and commands
 * 
 *  WIN:
 *    on file explorer address bar type cmd + Enter
 *  Mac / Linux
 *    open terminal
 *    type cd
 *    drag the folder onto the terminal
 *    press enter
 *
 *    cd = change directory
 * 
 *  Win:
 *    cls = clear screen
 * 
 *  Mac / Linux: 
 *    clear = clear screen
 * 
 */