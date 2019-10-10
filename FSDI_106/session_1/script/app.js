function createTodo() {
  var text = $("#txtTodo").val();
  $("#txtTodo").val("");

  var li = "<li>" + text + "</li>";
  $("#pendingList").append(li);

  // Set the focus back to the input field
  $("#txtTodo").focus();
  
}

function init() {
  console.log("Init of Todo app");
  //document.getElementById("btnSave").onclick = createTodo;
  $("#btnSave").click(createTodo);


}
// when the browser finish rendering my html
// execute the init function
window.onload = init;