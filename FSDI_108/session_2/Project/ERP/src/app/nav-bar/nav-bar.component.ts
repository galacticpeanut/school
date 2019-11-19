import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  constructor(private shared: SharedService) {
    this.isLoggedIn = shared.isUserLoggedIn;
  }

  ngOnInit() {
  }

  getIsLoggedIn() {
    return this.shared.isUserLoggedIn;
  }

}
