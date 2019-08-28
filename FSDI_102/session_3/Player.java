class Player {

  //attributles
  private String name;
  private int age;
//  private double salary;
//  private String team;

  //accesibility type nameMethod (parameter){}
 // public void teamChange(String newTeam) {
 //     team=newTeam;
//  }

  // setters and getters
  public void setName(String n) {
    name=n;
  }

  public String getName() {
    return name;
  }

  public void setAge(int a) {
    age=a;
  }

  public int getAge() {
    return age;
  }


  // Contsructor, sepcial method to create objects
  public Player(String n,int a) {
      name=n;
      age=a;
  }
/*
  public void run() {

  }

  public void skills() {

  }

  public void shoot() {

  }

  public void pass() {

  }

  public void dribble() {

  }

  public void header() {

  }

*/
}