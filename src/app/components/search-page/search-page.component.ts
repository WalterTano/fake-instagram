import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/Post';
import { PostResponse } from 'src/app/interfaces/PostResponse';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  hasSearchResult: boolean = false;
  title = 'Search';

  posts: Post[] = [];
  //postimg: PostImg[] = [];
  constructor(private discoverImgsService: PostService) { }

  ngOnInit(): void {
    this.hasSearchResult = false;
  }

  getSearchedImg(searchinput: string): void {
    this.hasSearchResult = true;
    this.discoverImgsService.getPosts(searchinput)
    .subscribe((response: PostResponse) => {
      if (response.success) {
        this.posts = response.data;
        this.hasSearchResult = this.posts.length > 0;
      } else {
        this.hasSearchResult = false;
      }
    });
  }

}
