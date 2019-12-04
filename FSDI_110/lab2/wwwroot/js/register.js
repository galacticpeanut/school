function register() {
  console.log("registering car");

  // get values from fields
  var price = $("#txtDailyPrice").val();
  var make = $("#txtMake").val();
  var model = $("#txtModel").val();
  var year = $("#txtYear").val();
  var passengers = $("#txtPassengerCapacity").val();
  var mileage = $("#txtMileage").val();
  var horsepower = $("#txtHorsepower").val();
  var cylinders = $("#txtCylinders").val();
  var imageUrl = $("#txtImageUrl").val();
  var description = $("#txtDescription").val();

  var errorOcurred = false;

  // data validations
  if (!year || isNaN(year)) {
    // error with year
    errorOcurred = true;
    $("#txtYear").addClass("error");
  } else {
    // parse year str into int
    // year = year * 1;
    year = parseInt(year);
    $("#txtYear").removeClass("error");
  }

  if(!price || isNaN(price)) {
    // error with price
    errorOcurred = true;
    $("#txtDailyPrice").addClass("error");
  } else {
    price = parseFloat(price);
    $("#txtDailyPrice").removeClass("error");
  }

  // Homework
  /* 
  * Show error message to fix errors when something entered
  * incorrectly in form
  * Show message when car is saved
  * Clear form
  */


  if(errorOcurred) {

    // show an alert to tell the user to fix error
    return; // do not continue, we have errors
  }

  // hide the alert

  // create an object
  var car = {
    dailyPrice: price,
    make: make,
    year: year,
    model: model,
    passengerCapacity: passengers,
    hp: horsepower,
    mileage: mileage,
    cyls: cylinders,
    imageUrl: imageUrl,
    description: description

  };

  console.log(car);

  // send the object on an Ajax req to the backend
  $.ajax({
    url: "/catalog/saveCar",
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(car),
    success: function(res) {
      console.log("succeed", res);

      // alert that car has been saved
      // clear the form
    },
    error: function(error) {
      console.log("Error", error);
    }
  });

}

function init() {
  console.log("Register page");
  $("#btnSave").click(register);
}

window.onload = init;