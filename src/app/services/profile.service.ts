import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private imgsUrl = "api/posts"
  mockFollow: boolean = true;

  constructor(private http: HttpClient) { }

  getPostsByUserId(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.imgsUrl);
  }

  updateFollowStatus(followerId: string, followedId: string): boolean {
    this.mockFollow = !this.mockFollow;
    return this.mockFollow;
  }

  getUserById(id: string) {
    const user = {
      name: 'Carlitos',
      username: 'carlitossoyyo',
      iconUrl: '../../assets/img1.jpg',
      city: 'San Francisco',
      state: 'CA'
    };

    return user;
  }
}
