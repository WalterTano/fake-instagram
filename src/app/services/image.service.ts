import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  private imgsUrl = 'api/posts';

  getImages(searchTerm?: string): Observable<Post[]> {
    if (searchTerm) {
      return this.http.get<Post[]>(this.imgsUrl + `?q=${searchTerm}`);
    } else {
      return this.http.get<Post[]>(this.imgsUrl);
    }
  }
}
