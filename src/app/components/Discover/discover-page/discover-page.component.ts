import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-discover-page',
  templateUrl: './discover-page.component.html',
  styleUrls: ['./discover-page.component.scss']
})
export class DiscoverPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private discoverImgsService: ImageService) { }

  ngOnInit(): void {
    this.discoverImgsService.getImages()
    .subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
