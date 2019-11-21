import { Component } from '@angular/core';
import { Friend } from '../models/Friend';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  myFriends: Friend[] = [];

  constructor(private data: DataService) {
    // read all my friends
    this.data.getAllFriends().subscribe(res => {
      this.myFriends = []; // clear prev data

      // Filter to show only friends to belong to me
      this.myFriends = res;
    });
  }

  saveFriend() {
    console.log("saving Friend", this.model);
    this.data.saveFriend(this.model);

    // reset form
    this.model = new Friend();
  }

}
