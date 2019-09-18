
let sum = 0;
let exampleArray=[1, 2, 3, 4 ,5];
alert("The array contains " + exampleArray);

for(var i=0; i< exampleArray.length; i++) {
  sum += exampleArray[i];
}

alert("The average is " + sum / exampleArray.length);
