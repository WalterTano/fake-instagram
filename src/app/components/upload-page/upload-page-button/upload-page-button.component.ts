import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page-button',
  templateUrl: './upload-page-button.component.html',
  styleUrls: ['./upload-page-button.component.scss']
})
export class UploadPageButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput($event: Event) {
    const { files } = $event.currentTarget as HTMLInputElement;
    const file = files![0];

    if (file) {
      console.log(file);
    }
  }
}
