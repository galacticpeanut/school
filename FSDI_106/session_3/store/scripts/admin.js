

/** functions */

// Ojbect constructor for items
function Item(code, title, price, description, category, rating, image) {
  this.code = code;
  this.title = title;
  this.price = price;
  this.description = description;
  this.category = category;
  this.rating = rating;
  this.image = image;
}

function saveItem() {
  // get values
  var code = $("#txtCode").val();
  var title = $("#txtTitle").val();
  var price = $("#txtPrice").val();
  var description = $("#txtDescription").val();
  var category = $("#txtCategory").val();
  var rating = $("#txtRating").val();
  var image = $("#txtImage").val();

  // create an object
  var test = new Item(code, title, price, description, category, rating, image);
  console.log(test);

  // send the object to a server
}

function solveHomework() {
  var data = [ 
    { age: 99, name: "Sergio", color: "Gray" }, 
    { age: 23, name: "John", color: "Blue" }, 
    { age: 27, name: "Alice", color: "Pink" }, 
    { age: 87, name: "Robert", color: "Gray" }, 
    { age: 23, name: "Sheldon", color: "Black" }, 
    { age: 45, name: "Will", color: "Green" }, 
    { age: 16, name: "Kevin", color: "Yellow" }, 
    { age: 37, name: "Liz", color: "Pink" }, 
    { age: 98, name: "Noah", color: "White" }, 
    { age: 31, name: "Alfredo", color: "White" }, 
    { age: 74, name: "Rhenard", color: "Green" }, 
    { age: 39, name: "Myk", color: "Blue" }, 
]  

// Homework
// 1 - Who (name - age) is the oldest ?
// 2 - Who (name - age) is the youngest ?
// 3 - Sum of all ages

  /* Required read about:
    HTTP Methods (Get, Post, Put, Delete)
    HTTP Status Codes
  */
var nameOldest, nameYoungest;
var oldest = 0;
var youngest = 200;
var sumAges = 0;
for (var i = 0;i < data.length;i++) {
  sumAges += data[i].age;
  if (data[i].age > oldest) {
    nameOldest = data[i].name;
    oldest = data[i].age;
  } else if (data[i].age < youngest ) {
    nameYoungest = data[i].name;
    youngest = data[i].age;
  } else {
    continue;
  }
}

console.log(nameOldest + "-" + oldest)
console.log(nameYoungest + "-" + youngest)
console.log(sumAges);
}
function init() {
  console.log("Admin Page");

  $("#btnSave").click(saveItem);

  solveHomework();
}

/** Initialization */
window.onload = init;