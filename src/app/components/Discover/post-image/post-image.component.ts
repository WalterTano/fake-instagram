import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostImg } from 'src/app/interfaces/PostImg';
import { User } from 'src/app/interfaces/User';
import { FullSizeImageComponent } from '../../full-size-image/full-size-image.component';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.scss']
})
export class PostImageComponent implements OnInit {

  @Input() image!: PostImg;
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {

  }
  @ViewChild('hiddenElement') fullSizedImgElement!: FullSizeImageComponent;

  openImage(){
    this.fullSizedImgElement.show();
  }

}
