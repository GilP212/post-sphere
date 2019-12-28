import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'; //  Observables package

import { Post } from './post.model';

@Injectable({providedIn: 'root'}) // provides PostsService as service on the root level.
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]; //  square brackets here, to return a new copied array and not ref.
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
