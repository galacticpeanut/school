class Example {
  public static void main(String args[]) {

    int studentAge;
    String name="Robert";
    double score=999.9;

    studentAge=31;

    System.out.println(name + " is " + studentAge + " years old.");

    for(int i=1; i <= 5;i++) {

      System.out.println("Iteration: " + i + ". " + name);

      if (i ==3) {
        System.out.println("I am here...");
      }
      
    }
  }
}