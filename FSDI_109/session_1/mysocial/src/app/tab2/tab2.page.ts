import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../services/data.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model = new Post();
  constructor(private data: DataService, private shared: SharedService) {

  }

  /**
   * create a Shared service
   * put a userName attribute in the service
   * Inject the service into this component
   * change ln 28 to this.model.from = this.shared.userName;
   */

  sendPost() {

    if (!this.model.message && !this.model.imageUrl) return;

    this.model.createdOn = new Date(); // set this moment on time
    this.model.from = this.shared.userName;
    console.log("Saving post", this.model);

    // save the obj
    this.data.savePost(this.model);

    // create new model (clear form)
    this.model = new Post();
  }
}

// 1  - Install on your phone: Ionic DevApp *
// 2 - open it and register for a new account
