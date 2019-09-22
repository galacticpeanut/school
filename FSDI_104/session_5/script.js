class Character{
  constructor(name,energy,hitPoints,id) {
    this.name=name;
    this.energy=energy;
    this.id=id;
  }

  display = function() {
    document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;
  }

  attack = function(opponent, item) {
    let newEnergy = opponent.energy - item.iHitPoints;
    opponent.energy=newEnergy;
    opponent.display();
    document.getElementById('console').innerHTML=`${this['name']} is attacking ${opponent['name']} with ${item['iName']} ${item['img']}`;
    if (opponent.energy <= 0) {
      document.getElementById(this.id).innerHTML=`You won!`;
      document.getElementById(opponent.id).innerHTML=`You lost to ${this.name}`;
    }
  }


}

class Item {
  constructor(iName,iHitPoints,img) {
    this.iHitPoints=iHitPoints;
    this.iName=iName;
    this.img=img;
  }
}

const item1 = new Item('Goomba', 20, "<img class='item' src='img/goomba.png'>");
const item2 = new Item('Night Sky', 30, "<img class='item' src='img/night_sky.png'>");
const item3 = new Item('Flower', 5, "<img class='item' src='img/flower.png'>");
const item4 = new Item('Green Shell', 10, "<img class='item' src='img/green_shell.png'>");
const item5 = new Item('Spiky Shell', 20, "<img class='item' src='img/spiky_shell.png'>");
const item6 = new Item('Star', 50, "<img class='item' src='img/star.png'>");
const item7 = new Item('Red Shell', 15, "<img class='item' src='img/red_shell.png'>");

const items = [item1, item2, item3, item4, item5, item6];

// general functions
const reset =  function() {
  c1.energy=100
  c2.energy=100;
  c1.display();
  c2.display();
}

function selectItem() {
  let selection = Math.floor(Math.random() * 7);
  return items[selection];
}

let c1 = new Character("Mario",100, 20, "c1");
let c2 = new Character("Bowser", 100, 30, "c2");
c1.display();
c2.display();