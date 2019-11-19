import { Component } from "@angular/core";
import { User } from "../models/User";
import { DataService } from "../services/data.service";
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent {
  userList: User[] = [];

  userName: string = "";
  password: string = "";

  userNameError = false;
  passwordError = false;
  loginFailed = false;

  constructor(private data: DataService, private router: Router, private shared: SharedService) {
    this.userList = data.getAllUsers();
  }

  userValueChanged() {
    if (this.userName) this.userNameError = false;
    else this.userNameError = true;
  }

  passValueChanged() {
    if (this.password) this.passwordError = false;
    else this.passwordError = true;
  }

  login() {
    var missingInfo = false;
    if (!this.userName) {
      missingInfo = true;
      this.userNameError = true;
    }
    if (!this.password) {
      missingInfo = true;
      this.passwordError = true;
    }
    if (missingInfo) return;

    // compare uesr name and password
    // with those of the userList
    /** logic
     * travel this userList array
     * get each element from the array
     * compare the userName and password with thos of the element
     * if they match, send the user to register page, hide login button
     * else show login error
     */

    var credsCorrect = false;
    for (var i = 0; i < this.userList.length; i++) {
      var user = this.userList[i];

      if (user.userName == this.userName && user.password == this.password) {
        console.log("logged in correctly");
        credsCorrect = true;
        this.loginFailed = false;
        this.shared.isUserLoggedIn = true;

        // send the user to Register page
        this.router.navigate(['user/new'])
      }
    }
    if (!credsCorrect) {
      console.log("Incorrect data!");
      this.loginFailed = true;
    }
  }
}
