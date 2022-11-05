import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/Post';
import { ImageService } from 'src/app/services/image.service';

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
  constructor(private discoverImgsService: ImageService) { }

  ngOnInit(): void {
    this.hasSearchResult = false;
  }

  getSearchedImg(searchinput: string): void {
    this.hasSearchResult = true;
    this.discoverImgsService.getImages(searchinput).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.hasSearchResult = true;
    });
  }

}
