class Animal {
  private String name;

  public Animal(String name) {
    this.name=name;
  }

  public String getName() {
    return this.name;
  }

  public void attack(Employee e) {
    System.out.println(this.name + " attacks " + e.getName());
  }
}