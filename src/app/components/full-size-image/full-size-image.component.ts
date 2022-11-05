import { Component, Input, OnInit } from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-full-size-image',
  templateUrl: './full-size-image.component.html',
  styleUrls: ['./full-size-image.component.scss'],
  // animations: [
  //   trigger("openClose", [
  //   transition("* => open", [
  //     style({ transform: "translateY(100%)"}),
  //     animate('0.2s', style({ transform: "translateY(0%)"}))
  //   ]),
  //   transition("open => *", [
  //     style({ transform: "translateY(0%)"}),
  //     animate('0.2s', style({ transform: "translateY(100%)"}))
  //   ])
  // ])]
})
export class FullSizeImageComponent implements OnInit {

  constructor() { }

  @Input() image!: PostImg;
  @Input() user!: User;

  isDisplaying: boolean = false;

  ngOnInit(): void {
  }

  show(): void {
    this.isDisplaying = true;
  }

  hide(): void {
    this.isDisplaying = false;
  }

}
