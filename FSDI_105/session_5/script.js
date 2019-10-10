const salon={
  name:"Fashion pets",
  phone: "8675309",
  address: {
    street:"Hope Ave",
    number:"1313-5"
  },
  workingHours: {
    days:"Mon-Fri",
    open:"8:00 am",
    close:"5:00 pm"
  },
  pets: [],

  countPets: function() {
    for (let i = 1; i< this.pets.length;i++) {
      console.log(`${i}`);
      //document.getElementById("petlist").innerHTML+=`${i}. ${this.pets[i - 1]['name']} <br>`;
    }
  }

}

let {name,phone,address:{street,number},workingHours:{days,open,close}} = salon;

document.querySelector(".info").innerHTML=`<h1>Welcome to ${name}</h1> <p>Contact us: ${phone}, ${number} ${street} <br>We are open from ${open} to ${close} ${days} </p>`
document.querySelector("footer .info").innerHTML=`<p>Contact us: ${phone}, ${number} ${street} <br>We are open from ${open} to ${close} ${days} </p>`


var petC=0;
class Pet {
  constructor(name, age, type, gender, breed, service, ownerName, contactPhone) {
    this.hunger=10;
    this.happiness=5;
    this.name = name;
    this.age = age;
    this.type = type;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;
    this.id="pet"+petC;
    petC+=1;
  };
  status=function() {
    console.log("happiness: " + this.happiness + "hunger: " + this.hunger);
  };

  feed=function() {
    this.hunger-=10;
    this.happiness+=10;
    console.log("Feeding...")
  };

  ownerContact() {
    console.log(`Owners Name: ${this.ownerName} \nContact Phone: ${this.contactPhone}`)
  };

}

var txtname = document.getElementById("name");
var txtage = document.getElementById("age");
var txttype = document.getElementById("type");
var txtgender = document.getElementById("gender");
var txtbreed = document.getElementById("breed");
var selectservice = document.getElementById("service");
var txtowner = document.getElementById("ownerName");
var txtphone = document.getElementById("contactPhone");

function register() {
  const thePet = new Pet(txtname.value, txtage.value, txttype.value, txtgender.value, txtbreed.value, selectservice.value, txtowner.value, txtphone.value);
  console.log(thePet);
  salon.pets.push(thePet);
  clear();
  alert("You have a registered a pet");
  displayTable(thePet);
}

function clear() {
  txtphone.value = "";
  txtowner.value = "";
  selectservice.value = "";
  txtbreed.value = "";
  txtgender.value = "";
  txttype.value = "";
  txtname.value = "";
  txtage.value = "";
}

/* function display(aPet) {
  var list = document.getElementById('petTable');
  var tr = document.createElement('tr');
  tr.innerHTML=`<td>${aPet['name']}</td> <td>${aPet['age']}</td> <td>${aPet['type']}</td> <td>${aPet['breed']}</td> <td>${aPet['gender']}</td> <td>${aPet['service']}</td>`;
  list.appendChild(tr);
} */

function displayTable(aPet) {
  var tBody = document.getElementById('listBody');
  var row = `<tr id="${aPet['id']}">
  <td>${aPet['name']}</td>
  <td>${aPet['age']}</td>
  <td>${aPet['gender']}</td>
  <td>${aPet['type']}</td>
  <td>${aPet['breed']}</td>
  <td>${aPet['service']}</td>
  <td>${aPet['ownerName']}</td>
  <td>${aPet['contactPhone']}</td>
  <td><button onclick="remove(\'${aPet['id']}\');">Delete</button></td>
</tr>`;
  tBody.innerHTML+=row;
}

function remove(petId) {
  var tr = document.getElementById(petId);
  var indexDelete=0;

  for(var i=0;i<salon.pets.length;i++) {
    var indexPets = salon.pets[i];

    if (indexPets['id'] == petId) {
      indexDelete = i;
    }
  }

  salon.pets.splice(indexDelete, 1);
  tr.remove();
}


function hide(petId) {
  $("#" + petId).hide();
}

function search() {
  reset();
  var searchString = document.getElementById("search").value;
  for (var i = 0;i<salon.pets.length;i++) {
    var pet=salon.pets[i];
    console.log("Searching " + pet);
    if (pet['name'] == searchString|| pet['age']  == searchString|| pet['type'] == searchString || pet['breed'] == searchString ||
      pet['gender'] == searchString || pet['breed'] == searchString || pet['service'] == searchString || pet['ownerName'] == searchString ||
      pet['contactPhone'] == searchString || pet['id'] == searchString) {
        console.log("Found string in pet id " + pet['id'])
        var row = document.getElementById(pet['id']);
        //row.setAttribute('class', 'bg-success');
      } else {
        hide(pet['id']);
      }
  }

}

function reset() {
  $("tr").show();
}