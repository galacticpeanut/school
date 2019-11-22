import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { Friend } from '../models/Friend';

import { map } from 'rxjs/operators';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Observable<Post[]>;
  postCollection: AngularFirestoreCollection<Post>; // pipeline to Firebase Db

  friends: Observable<Friend[]>;
  friendCollection: AngularFirestoreCollection<Friend>;

  constructor(private fb: AngularFirestore) {
    this.postCollection = fb.collection<Post>("posts"); // opening the pipeline
    this.friendCollection = fb.collection<Friend>('friends');

    this.retrieveFriends();
    this.retrieveMessages();
  }

  private retrieveMessages() {
    this.posts = this.postCollection.snapshotChanges().pipe( 
      map(actions => { 
        return actions.map(m => { 
          var data = m.payload.doc.data(); 
          var id = m.payload.doc.id; 
          var d: any = data.createdOn; 
          data.createdOn = new firestore.Timestamp(
            d.seconds, 
            d.nanoseconds 
          ).toDate(); 
          return { ...data }; 
        }); 
      }) 
    );
  }

  private retrieveFriends() {
    this.friends = this.friendCollection.valueChanges();

  }
  public saveFriend(friend) {
    var item = Object.assign({}, friend);
    this.friendCollection.add(item);
  }

  public savePost(post) {
    var item = Object.assign({}, post);
    this.postCollection.add(item);
  }

  public getAllPosts() {
    this.retrieveMessages();
    return this.posts; // return the observable array
  }

  public getAllFriends() {
    this.retrieveFriends();
    return this.friends; // return the observable array
  }
}
