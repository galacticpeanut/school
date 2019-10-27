
/** GLOBAL Variables */
var items = [];
var serverURL = "http://restclass.azurewebsites.net"; 

/** functions  */

function getCatalogFromServer() {
  /**
   * Create AJAX request to get the data
   * When the data is received:
   *  - fill the items array
   *  - call display catalog
   */

  // retrieve the objects from the server
  $.ajax({
    url: serverURL + "/API/points",
    type: "GET",
    success: function(res) {
      console.log("Server responded with OK", res);
      // filter and only get my items to items array
      for (var i = 0;i < res.length;i++ ) {
        if (res[i].user == "Robert") {
          items.push(res[i]);
          console.log(res[i]);
        }
      }
      displayCatalog();
    },
    error: function(error) {
      console.log("Error on request", error);
    }

  });
}

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
  getCatalogFromServer();

}

/** Initialization */
window.onload = init;