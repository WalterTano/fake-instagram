import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-photo-profile-grid',
  templateUrl: './photo-profile-grid.component.html',
  styleUrls: ['./photo-profile-grid.component.scss']
})
export class PhotoProfileGridComponent implements OnInit {

  @Input() user!: User;
  posts: Post[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getPostsByUserId(this.user.username)
    .subscribe(posts => {
      this.posts = posts;
    });
  }

}
