import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-chat-message-vuew',
  templateUrl: './chat-message-vuew.component.html',
  styleUrls: ['./chat-message-vuew.component.scss']
})
export class ChatMessageVuewComponent implements OnInit {

  isDisplaying?: boolean = false;

  @Input() user?: User;

  constructor() { }

  ngOnInit(): void {
  }

  show(){
    this.isDisplaying = true;
  }

}
