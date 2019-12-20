
function displayCar(car) {
  // get the root element (where you want to display it?)

  var container = $("#catalogContainer");
  
  var template = `
  <div class="col-5 item">

    <div class="row">
      <div class="col-7">
        <img src="${car['imageUrl']}">
      </div>
    
      <div class="col-5">
        <label class="info-title">Year:</label>
        <label class="info-value">${car['year']}</label>
        <br>

        <label class="info-title">Make:</label>
        <label class="info-value">${car['make']}</label>
        <br>

        <label class="info-title">Model:</labeL>
        <label class="info-value">${car['model']}</label>
        <br>

        <label class="info-title">Daily Price:</label>
        <label class="info-value">${car['dailyPrice']}</label>
        <br>

        <label class="info-title">Mileage: </label>
        <label class="info-value">${car['mileage']}</label>
        <br>

        <label class="info-title">Passengers:</label>
        <label class="info-value">${car['passengerCapacity']}</label>
        <br>

        <label class="info-title">Cylinders:</label>
        <label class="info-value">${car['cyls']}</label>
        <br>

        <label class="info-title">HP:</label>
        <label class="info-value">${car['hp']}</label>
        <br>
      </div>
    </div>



    <div class="row">
      <div class="col-12">
        <label class="info-title">Description:</label>
        <p>${car['description']}</p>
      </div>
    </div>
    <div class="row">
      <div class="offset-4 col-6">
        <button id="btnSave" name="btnSave" class="btn btn-success">Rent Now!</button>
      </div>
    </div>


<!-- 
Competency report
  Add register button 
-->
  `

  container.append(template);
}

function getCatalog() {
  // create AJAX req to getcatalog

  $.ajax({
    url: "/catalog/getCatalog",
    type: 'GET',
    success: function(res) {
      console.log("succeed", res);
      for (var i = 0;i < res.length;i++ ) {
          var item = res[i];
          console.log(item);
          displayCar(item);

      }
  
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