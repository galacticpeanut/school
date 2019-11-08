import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;

  constructor(private data: DataService) {}

  ngOnInit() {
  }

  registerUser() {

    console.log("The user twant to another user");
    console.log(this.model);
    
    // save the user into the service
    this.data.saveUser(this.model);
  }


}
