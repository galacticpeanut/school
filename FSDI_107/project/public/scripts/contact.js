var serverURL = "http://localhost:8080"; 

function clearForm() {
  $("#txtName").val("");
  $("#txtMail").val("");
  $("#txtMessage").val("");
}

function saveMessage() {
  // read data
  var name = $("#txtName").val();
  var mail = $("#txtMail").val();
  var message = $("#txtMessage").val();


  // create an object
  var msg = {
    name: name,
    mail: mail,
    message: message,
    user: 'Robert'
  };

  console.log(msg);
  // send the object to back end
  $.ajax({
    url: serverURL + "/api/message",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(msg),
    success: function(response) {
      console.log("Data Saved, Server responded with " + response);
      clearForm();
      $("#alert").removeClass("hide")  
    
      // set a time to execute some actions
      setTimeout(
        function() {
          $("#alert").addClass("hide");
        },
        10000 // 10_000 = 10 seconds
      );
    },
    error: function(details) {
      console.log("Error, something went wrong " + details)
    }
  });


}

function init() {
  console.log("Contact Page!");

  // click event on button
  $("#btnSend").click(saveMessage)
}

window.onload = init;