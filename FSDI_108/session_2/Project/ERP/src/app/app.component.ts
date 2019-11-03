import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = "Robert Ziegler";

  test() {
    console.log("Ohh no, you clicked me!!!");
    
    this.name = "changed!";
  }
}
