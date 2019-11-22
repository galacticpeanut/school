import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Post } from '../models/Post';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postsToShow: Post[] = [];

  constructor(private data: DataService) {
    this.data.getAllPosts().subscribe(res => {
      this.postsToShow = []; // clear the previous data

      for( var i = 0; i < res.length; i++ ) {
        var msg = res[i]
        if(msg.to == "Robert" || 
          msg.from == "Everyone" || 
          msg.to == "Everyone") {
          this.postsToShow.push(msg);
        }
      }
    });
  }
}
