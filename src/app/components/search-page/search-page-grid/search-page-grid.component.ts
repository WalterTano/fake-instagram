import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/Post';

@Component({
  selector: 'app-search-page-grid',
  templateUrl: './search-page-grid.component.html',
  styleUrls: ['./search-page-grid.component.scss']
})
export class SearchPageGridComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
