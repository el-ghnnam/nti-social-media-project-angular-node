import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../server/models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getUserById(id: string): Observable<Iuser> {
    return this.http.get<Iuser>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  getUserByUsername(username: string): Observable<Iuser> {
    return this.http.get<Iuser>(
      `http://localhost:3000/api/users/username/${username}`,
      this.getAuthHeaders()
    );
  }

  login(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string; user: Iuser }> {
    return this.http.post<{ token: string; user: Iuser }>(
      'http://localhost:3000/api/auth/login',
      credentials
    );
  }

  private loggedInUser: Iuser | null = null;

  setLoggedUser(user: Iuser) {
    this.loggedInUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLogedUser(): Iuser | null {
    if (this.loggedInUser) return this.loggedInUser;

    const stored = localStorage.getItem('user');
    if (stored) {
      try {
        this.loggedInUser = JSON.parse(stored);
        return this.loggedInUser;
      } catch {
        return null;
      }
    }
    return null;
  }

  logOutUser() {
    this.loggedInUser = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
