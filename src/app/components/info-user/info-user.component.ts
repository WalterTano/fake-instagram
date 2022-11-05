import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {

  @Input() user!: User;
  @Input() isDarkMode?: boolean;

  get colorScheme(): 'light' | 'dark' {
    return this.isDarkMode ? 'dark' : 'light';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
