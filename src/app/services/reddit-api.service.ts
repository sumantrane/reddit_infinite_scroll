import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedditApiService {
  private baseUrl = 'https://www.reddit.com/r/aww';

  constructor(private http: HttpClient) {}

  getPosts(after?: string): Observable<any> {
    const params: any = { limit: '25' };
    if (after) {
      params.after = after;
    }
    return this.http.get(`${this.baseUrl}/new.json`, { params });
  }
}
