/* // object literal

const person1 = {
  // attributes
  name:'Robert',
  lastName:'Ziegler',
  age:31,
  job:true,
  music:['Some band', 'Some other band', 'New band'],
  address:{
    street:'Fake St',
    number:123
  },
  birthday:function(){
    let date = new Date();
    return date.getFullYear()-this.age;
  }

}

const person2 = {
  name:'Moein',
  lastName:'Ghomeshian',
  age: 36,
  job: true,
  music:['Guns & Roses', 'Sting']
}

console.log(person1.birthday()); // powerful dot
//object constructor

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//const person1 = new Person("Robert", 31);
//const person2 = new Person("Moein", 36);


//console.log(person1);
//console.log(person2.age);

class Task {
  constructor(name, priority, date) {
    this.name = name;
    this.priority = priority;
    this.date = date;
  }
}

const task1=new Task('Exam', 'High', '09/17/19');
const task2=new Task('Homework', 'Medium', '09/17/19');
const task3=new Task('TTH', 'Low', '09/17/19');
const tasks = [task1, task2, task3];

for(let i=0; i < tasks.length; i++) {
  let task=tasks[i];

  document.getElementById("message")
          .innerHTML+=`Task Name: ${task['name']} <br>
                       Priority: ${task['priority']} <br>
                       Due Date: ${task['date']} <br>
                       <br>`;
}

 */
/* 
const client = {
  name:'John',
  type:'Premium',
  data:{
    location:{
      city:'Tijuana',
      country:'Mexico'
    },
    account:{
      date:'2019',
      credit:1000
      
    }
  }
}

const clientName=client.name;
let {name}=client;
let {type}=client;

let {data:{location:{city}}} = client;
console.log(city); */

class Student {
  constructor(name,points,grade){
    this.name = name;
    this.points = points;
    this.grade = grade;
  }
}


const s1 = new Student('Robert', 1100, 'OP');
const s2 = new Student('Kevin', 990, 'A');
const s3 = new Student('Will', 900, 'A');
const s4 = new Student('Moein', 800, 'B+');
const s5 = new Student('Liz', 1000, 'A');
const s6 = new Student('Noah', 850, 'A-');
const s7 = new Student('Oliver', 600, 'C+');
const s8 = new Student('Sheldon', 500, 'F');

const students = [s1, s2, s3, s4, s5, s6, s7, s8];

const best  = students.filter(students => students.points<800);
console.log(best);

const liz = students.find(students => students.name==='Liz');

const total = students.reduce((total,students)=>total+students.points,0);

console.log("Cohort 5 average: " + total/students.length);

