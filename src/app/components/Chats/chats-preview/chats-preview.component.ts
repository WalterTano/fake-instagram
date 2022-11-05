import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ChatMessageVuewComponent } from './chat-message-vuew/chat-message-vuew.component';

import { User } from 'src/app/interfaces/User';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-chats-preview',
  templateUrl: './chats-preview.component.html',
  styleUrls: ['./chats-preview.component.scss']
})
export class ChatsPreviewComponent implements OnInit {

  users: User[] = [];

  @ViewChild('hiddenElement') chat?: ChatMessageVuewComponent;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.imageService.getImages()
    .subscribe((posts: Post[]) => {
      for(const { user } of posts){
        this.users.push(user);
      }
    });
  }

  openChat(user: User){
    this.chat!.user = user;
    this.chat?.show();
  }

}
