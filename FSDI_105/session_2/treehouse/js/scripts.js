// 1: Select the element with the ID 'about'. 
//    Store the element in the variable `about`.
const about = document.getElementById("about");
about.style.border = "2px solid firebrick";

// 2: Select all the <h2> elements in the document.
//    Set the color of the <h2> elements to a different co

const h2Elements = document.getElementsByTagName("h2")
for (var i = 0; i < h2Elements.length; i++) {
  h2Elements[i].style.color = "red";
}
// 3: Select all elements with the class '.card'. 
//    Set their background color to the color of your choice.
const cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
  cards[i].style.backgroundColor = "yellow";
}

// 4: Select only the first <ul> in the document.
//    Assign it to a variable named `ul`.

const ul = document.getElementsByTagName("ul");
// console.log(ul[0]);
ul[0].style.border = "2px solid indigo";

// 5: Select only the second element with the class '.container'.
//    Assign it to a variable named `container`.

const container = document.getElementsByClassName("container");
// console.log(container);
container[1].style.backgroundColor = "royalblue";

// 6: Select all <a> elements that have a 'title' attribute. 
//    Set their color value to the color of your choice.
const links = document.getElementsByTagName("a")
for (var i = 0; i < links.length; i++) {
  if (links[i].hasAttribute("title")) {
    links[i].style.color = "blue";
  }
//  console.log(links[i].hasAttribute("title"))
}
