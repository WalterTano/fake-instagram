import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile.service';

const DEFAULT_USERNAME = 'albertito';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user!: User;
  runningUserId = DEFAULT_USERNAME;

  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username');
    const query = username ? username : this.runningUserId;
    this.profileService.getUserByUsername(query)
    .subscribe( response => {
      if (response.success) {
        this.user = response.data;
      }
    });
  }

}
