import java.util.Scanner;

class LearningSystem { 
  public static void main(String args[]) {
    Scanner sc=new Scanner(System.in);

    System.out.println("Enter Name: ");
    String n=sc.nextLine();
    System.out.println("Enter Gender: ");
    String g=sc.nextLine();
    System.out.println("Enter ID Number: ");
    String id=sc.nextLine();
    System.out.println("Enter Age: ");
    String a=sc.nextLine();
    Student student1=new Student(n, Integer.parseInt(a), id, g);
    // Student student2=new Student("Noah", 27, " 89759", "Male");


    student1.printInfo();
    // student2.printInfo();
  }
}