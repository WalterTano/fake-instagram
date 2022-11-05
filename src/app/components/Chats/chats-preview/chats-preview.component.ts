import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ChatMessageVuewComponent } from './chat-message-vuew/chat-message-vuew.component';

import { User } from 'src/app/interfaces/User';
import { Post } from 'src/app/interfaces/Post';
import { PostResponse } from 'src/app/interfaces/PostResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chats-preview',
  templateUrl: './chats-preview.component.html',
  styleUrls: ['./chats-preview.component.scss']
})
export class ChatsPreviewComponent implements OnInit {

  users: User[] = [];

  @ViewChild('hiddenElement') chat?: ChatMessageVuewComponent;

  constructor(private imageService: PostService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.paramMap.get('username');

    this.imageService.getPosts(undefined, true)
    .subscribe((response: PostResponse) => {
      if (!response.success) {
        return;
      }

      for(const { user } of response.data){
        this.users.push(user);

        if (user.username === username) {
          this.openChat(user);
        }
      }
    });
  }

  openChat(user: User){
    this.chat!.user = user;
    this.chat?.show();
  }

}
