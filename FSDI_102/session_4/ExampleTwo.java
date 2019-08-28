class ExampleTwo {
  
  public static void main(String args[]) {
    Person p1=new Person("Noah", 27);
    Employee e1=new Employee(3283276, "Myk", 37);

    System.out.println(p1.getName() + " " + p1.getAge());

    System.out.println(e1.getName() + " " + e1.getAge() + " " + e1.getSalary());

    Animal a1=new Animal("Chicken");
    a1.attack(e1);

    // Add 2 more employee/person
    Employee e2=new Employee(2438523, "Duane", 30);
    Employee e3=new Employee(4385735, "Gregg", 35);

    // Add 2 more animals
    Animal a2=new Animal("Kangaroo");
    Animal a3=new Animal("Ferret");
    a2.attack(e2);
    a3.attack(e3);



  }
}