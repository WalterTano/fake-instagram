import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  @Input() user!: User;
  @Input() isFollowed: boolean = true;

  get followText(): 'Follow' | 'Unfollow' {
    return this.isFollowed ? 'Follow' : 'Unfollow';
  }

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  updateFollowStatus() {
    this.isFollowed = this.profileService.updateFollowStatus(this.user.username, this.user.username);
  }

}
