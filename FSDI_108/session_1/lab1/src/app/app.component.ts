import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Something';

  constructor() {
    console.log("I'm the constructor");

    var name : string = "Robert";
    var age : number = 33;

    var last = "Ziegler";
    var luckNum = 42;
    var lazy : any = 9;

    lazy = "Robert";
  }

  sum(num1, num2) {
    return num1 + num2;
  }
  
  sayHello() {
    console.log("Hello from a fn in TS");
  }

  test() {
    console.log("user pressed the button");

    this.title = "Voila (this is magic)";
  }
}
