class Student {
  
  private String name;
  private int age;
  private String number;
  private String gender;

  // Methods

  public void printInfo() {
    System.out.println(this.number + " " + this.name + " " + this.age + " " + this.gender);
  }

  public void setName(String name) {
    this.name=name;
  }

  public String getName() {
    return this.name;
  }

  public void setAge(int age) {
    this.age=age;
  }

  public int getAge() {
    return this.age;
  }

  public void setNumber(String number) {
    this.number=number;
  }

  public String getNumber() {
    return this.number;
  }

  public void setGender(String gender) {
    this.gender=gender;
  }

  public String getGender() {
    return this.gender;
  }

  public Student(String name, int age, String number, String gender) {
    this.name=name;
    this.age=age;
    this.number=number;
    this.gender=gender;
  }
}