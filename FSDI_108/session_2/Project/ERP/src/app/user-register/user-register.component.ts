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
  userNameError = false;
  passwordError = false;
  passMatchError = false;
  emailError = false;

  constructor(private data: DataService) {}

  ngOnInit() {
  }

  userValueChanged() {
    this.userNameError = this.model.userName.length < 4;
  }

  passValueChanged() {
    this.passwordError = this.model.password.length < 6;

    this.passMatchError = this.model.password != this.retypePassword;
  }

  emailValueChanged() {
    if(this.model.email.length < 8 || !this.model.email.includes('@') ) {
      this.emailError = true;
    } else {
       this.emailError = false;
    }

  }

  registerUser() {
  
    var isThereAnError = false;
    if(!this.model.userName) {
      this.userNameError = true;
      isThereAnError = true;
    
    }
    if(!this.model.password) {
      this.passwordError = true;
      isThereAnError = true;
    }
    if(!this.model.email) {
      this.emailError = true;
      isThereAnError = true;
    }

    if(isThereAnError || this.passMatchError || this.emailError) {
      return;
    }
    console.log("The user twant to another user");
    console.log(this.model);
    
    // save the user into the service
    this.data.saveUser(this.model);

    // create a new one
    // so user can register more users
    this.model = new User();
    this.retypePassword = "";
  }


}
