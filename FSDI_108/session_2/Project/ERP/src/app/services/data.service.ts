import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  // create an empty user array
  users: User[] = [];

  constructor() {
    // create a default/admin user
    var user = new User();
    user.userName = "admin";
    user.password = "qwerty";
    user.firstName = "Admin";
    user.lastName = "User";

    this.users.push(user);
  }

  public sayHello() {
    console.log("Hello from a service");
  }

  public saveUser(theNewUser) {
    // get a user and add it to the array
    this.users.push(theNewUser);
  }

  // return all the users
  public getAllUsers() {
    return this.users;
  }
}
