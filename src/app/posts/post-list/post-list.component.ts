import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [];
  // posts = [
  //   {title: 'First Post', content: 'This is content, yo.'},
  //   {title: 'Second Post', content: 'This is content, yo.'},
  //   {title: 'Third Post', content: 'This is content, yo.'}
  // ];
}
