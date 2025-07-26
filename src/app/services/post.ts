import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipost } from '../server/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/api/posts';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getPosts(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiUrl, this.getAuthHeaders());
  }

  addPost(post: Ipost): Observable<Ipost> {
    return this.http.post<Ipost>(this.apiUrl, post, this.getAuthHeaders());
  }

  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`,
      this.getAuthHeaders()
    );
  }

  updatePost(post: Ipost): Observable<Ipost> {
    return this.http.put<Ipost>(
      `${this.apiUrl}/${post._id}`,
      post,
      this.getAuthHeaders()
    );
  }
}
