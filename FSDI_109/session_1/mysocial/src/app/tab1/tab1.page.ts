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

      this.postsToShow = res;
      console.log("Event happened");
    });
  }
}