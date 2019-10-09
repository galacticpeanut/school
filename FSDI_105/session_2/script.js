// global variables
const inputTask = document.getElementById("task");
var x =0;

function register() {
  x++;
  const list = document.getElementById('listTask');
  const newElement = document.createElement('li');

 // const newText = document.createTextNode(inputTask.value);
  
 // newElement.appendChild(newText);
//  newElement.innerText=inputTask.value;
  newElement.innerHTML=`${inputTask.value} <button class="btn btn-outline-danger btn-sm" onclick="removeTask('task${x}')">Delete</button>`;
  newElement.setAttribute('class', 'list-group-item');
  newElement.setAttribute('id', 'task'+x);
  list.appendChild(newElement);
  clear();
}


function clear() {
  inputTask.value="";
}

function removeTask(id) {
  const element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

