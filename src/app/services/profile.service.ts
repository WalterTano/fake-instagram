import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Post } from '../interfaces/Post';
import { PostResponse } from '../interfaces/PostResponse';
import { User } from '../interfaces/User';
import { UserResponse } from '../interfaces/UserResponse';

const USERS_ENDPOINT = '/users';
const POSTS_ENDPOINT = '/posts';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  mockFollow: boolean = true;

  constructor(private http: HttpClient) { }

  getPostsByUserId(userId: string): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${environment.apiBaseUrl}${POSTS_ENDPOINT}?userId=${userId}`);
  }

  getUserByUsername(username: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${environment.apiBaseUrl}${USERS_ENDPOINT}/${username}`);
  }

  updateFollowStatus(followerId: string, followedId: string): boolean {
    this.mockFollow = !this.mockFollow;
    return this.mockFollow;
  }
}
