public class Game {
  public static void main(String args[]) {

    System.out.println("********* Welcome to my Video Game *********");

    Character mario = new Character("Mario (M)", 3, 100, 25, 5);
    Character toad = new Character("Toad D", 3, 100, 50, 4);
    mario.printCharacter();
    toad.printCharacter();

    mario.attack(toad);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
    toad.attack(mario);
  }
}