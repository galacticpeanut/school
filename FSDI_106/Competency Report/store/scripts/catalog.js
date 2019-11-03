
/** GLOBAL Variables */
var items = [];
// var serverURL = "http://restclass.azurewebsites.net"; 
var serverURL = "http://localhost:8080"; 

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
    url: serverURL + "/api/products",
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

    displayItem(product);

   }
}



function displayItem(product) {

  var pLayout = `<div class="item">
  <img src="images/${product['image']}">
  <h4>${product['title']}</h4>
  <h6>$ ${product['price']}</h6>
  <p>${product['description']}</p>
  <button class="btn btn-sm btn-info">Add to Cart</button>
  </div>`;

  $("#catalog").append(pLayout); 
}

function searchCatalog() {
  var query = $("#txtSearch").val();

  $("#catalog").html("");

  /**
   * Travel the array
   * get each element from the array
   * compare the text with the item.title
   * if match, display the item
   */

   for (var i = 0;i< items.length;i++) {
     var product = items[i];
      if (product.title.toLowerCase().includes(query.toLowerCase())
      || product.code.toLowerCase().includes(query.toLowerCase())
      || product.description.toLowerCase().includes(query.toLowerCase()
      || product.rating.toString().toLowerCase().includes(query.toLowerCase()))
      ) {
        displayItem(product);
      }
    }  
   
   console.log("Search Query is ", query);
  $("#txtSearch").val("");
  $("#txtSearch").focus();
}

/** functions */
function init() {
  console.log("Catalog Page");

  // events
  $("#btnSearch").click(searchCatalog);
  $("#txtSearch").keypress(function (e) {
    if (e.key == "Enter") {
      searchCatalog();
      e.preventDefault();
    }
  })

  //  $("#txtSearch").keyup(searchCatalog);
  getCatalogFromServer();
}

/** Initialization */
window.onload = init;