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
      document.getElementById("petlist").innerHTML+=`${i}. ${this.pets[i - 1]['name']} <br>`;
    }
  }

}

let {name,phone,address:{street,number},workingHours:{days,open,close}} = salon;

  document.getElementById("contact").innerHTML=`<h1>Welcome to ${name}</h1> <p>Contact us: ${phone}, ${number} ${street} <br>We are open from ${open} to ${close} ${days} </p>`

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


const pet1 = new Pet("Shaggy", 5, "dog", "Male", "German Shepard", "Hair Cut", "Oliver", "0574875");
const pet2 = new Pet("Nessie", 10, "dog", "Female", "Pitbull", "Wash", "Jeff", "238959038");
const pet3 = new Pet("Mahli", 7, "cat", "Male", "Maine Coon", "Nail clipping", "Shasta", "23572379");
const pet4 = new Pet("Talisman", 3, "dog", "Female", "Poodle", "Hair cut", "Dustin", "324572375" );

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);
salon.pets.push(pet4);
salon.countPets();

//pet1.status();
//pet1.feed();
//pet1.status();
//pet1.ownerContact();
//console.table(salon.pets);

//Display how many pets you have
