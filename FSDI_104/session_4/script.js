class Character{
  constructor(name,energy,hitPoints,id) {
    this.name=name;
    this.energy=energy;
    this.totalEnergy=energy;
    this.hitPoints=hitPoints;
    this.id=id;
  }

  display = function() {
    document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy} <br> Hit points: ${this.hitPoints}`;
  }

  attack = function(opponent) {
    let newEnergy = opponent.energy - this.hitPoints;
    opponent.energy=newEnergy;
    opponent.display();
    if (opponent.energy <= 0) {
      document.getElementById(this.id).innerHTML=`You won!`;
      document.getElementById(opponent.id).innerHTML=`You lost to ${this.name}`;
      document.getElementById('gameMenu').style.display='block';
    }
  }
}

class Game {
  constructor(characters) {
    this.characters=characters;
  }

  resetGame = function() {
    document.getElementById('gameMenu').style.display='none';
    for(var c = 0; c < this.characters.length;c++) {
      this.characters[c].energy = this.characters[c].totalEnergy;
      this.characters[c].display();
    }
  }

  showCharacters = function() {
    for(var c = 0; c < this.characters.length;c++) {
      this.characters[c].display();
    }
  }
}

  let c1 = new Character("Mario",100, 20, "c1");
  let c2 = new Character("Bowser", 100, 30, "c2");

  const game = new Game([c1, c2]);
  game.showCharacters();
