
/** GLOBAL Variables */
var items = ["Item 1", "Item 2", "Item 42"];
var items = [
  {
    code: "askk123",
    title: "This is the first product",
    price: 123.45,
    description: "This is the long description of a product so the client learn about it and buy it",
    category: "Electronics",
    rating: 4,
    image: "img1.jpg"
  },
  {
    code: "prod2",
    title: "Jet Pack",
    price: 9123.45,
    description: "You will be able to FLY :D",
    category: "Gear",
    rating: 5,
    image: "jet.jpg"
  },
  {
    code: "ship1",
    title: "Golden Hearth Ship",
    price: 424242.45,
    description: "Its like a boat but bigger",
    category: "Ships",
    rating: 5,
    image: "ship.png"
  },
  {
    code: "nonsens",
    title: "TDniorefnt THesth THsoite",
    price: 1111.15,
    description: "arstnha tahrstnwfht awhftnawf ath awtfheant",
    category: "Ships",
    rating: 2,
    image: "nonsense.png"
  }

];

function displayCatalog() {
  /**
   * Travel the array
   * get each element from the array
   * display the element into the DOM (html)
   */

   for(var i = 0; i<items.length; i++) {
     var product = items[i];
     // var pLayout = "<div>" + product + "</div>"

     var pLayout = `<div class="item">
     <img src="images/${product['image']}">
     <h4>${product['title']}</h4>
     <h6>$ ${product['price']}</h6>
     <p>${product['description']}</p>
     <button class="btn btn-sm btn-info">Add to Cart</button>
     </div>`;

     $("#catalog").append(pLayout); 
   }
}

/** functions */
function init() {
  console.log("Catalog Page");
  displayCatalog();
}

/** Initialization */
window.onload = init;