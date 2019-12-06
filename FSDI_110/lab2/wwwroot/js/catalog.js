function getCatalog() {
  // create AJAX req to getcatalog

  $.ajax({
    url: "/catalog/getCatalog",
    type: 'GET',
    success: function(res) {
      console.log("succeed", res);
    },
    error: function(error) {
      console.log("Error", error);
    }
  });
  // print the response on the console
}

function init() {
  console.log("Catalog page");

  getCatalog();
}


window.onload = init;

// VACATIONS:
// 21 Dec - 5 Jan