import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PostResponse } from '../interfaces/PostResponse';

const POSTS_ENDPOINT = '/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(searchTerm?: string, includeUser?: boolean): Observable<PostResponse> {
    if (searchTerm) {
      return this.http.get<PostResponse>(`${environment.apiBaseUrl}/${POSTS_ENDPOINT}?q=${searchTerm}&includeUser=${includeUser}`);
    } else {
      return this.http.get<PostResponse>(`${environment.apiBaseUrl}/${POSTS_ENDPOINT}?includeUser=${includeUser}`);
    }
  }
}
