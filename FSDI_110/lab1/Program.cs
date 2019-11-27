using System;

namespace lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            new Program(); // creating an instance
        }

        /**
        Constructor of the class (execs automatically when an instance is creaeted)
        Rules:
        - It MUST have the same name as the class
        - Is the only Method that DO NOT contain return type
        */

        public Program()
        {
            Console.WriteLine("My First DotNet app");
            Test();
        }

        void Test()
        {
            /* Data types */
            // Integer x = 1;
            int age = 99;
            // Float
            float gravity = 9.8f;
            // Decimal
            decimal money = 12.99m;
            // Boolean
            bool isThisCrazy = true;

            string text = "This is an string";

            System.Console.WriteLine("This is my name: Robert");

            if(money < 50) {
                System.Console.WriteLine("It's cheap");
            } else {
                System.Console.WriteLine("Its expensive");
            }

            for(int i = 0;i < 10;i++) {
                System.Console.WriteLine("i: {0:D}", i);
            }
        }

        /**
            Method (function)
            Rules:
                - Access level (optional, default is private)
                - Return type (always return a value of that type)
                - Name
                - Parameters (type name, type name)
        */
        public int SayHello()
        {
            Console.WriteLine("I'm a method");
            bool isRainy = false;

            if(isRainy) {
                return 21;
            } else {
                return 6;
            }
        }
    }
}
