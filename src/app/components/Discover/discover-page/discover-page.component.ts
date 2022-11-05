import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { PostResponse } from 'src/app/interfaces/PostResponse';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private discoverImgsService: PostService) { }

  ngOnInit(): void {
    this.discoverImgsService.getPosts(undefined, true)
    .subscribe((response: PostResponse) => {
      if (response.success) {
        this.posts = response.data;
      }
    });
  }

}
