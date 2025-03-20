import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users?page=';

  constructor(private http: HttpClient) {}

  getUsers(page: number = 1): Observable<User[]> {
    return this.http.get<{ data: User[] }>(`${this.apiUrl}${page}`).pipe(
      map(response => response.data),
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching users:', error);
        throw error;
      })
    );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<{ data: User }>(`https://reqres.in/api/users/${id}`).pipe(
      map(response => response.data),
      shareReplay(1),
      catchError(error => {
        console.error('Error fetching user:', error);
        throw error;
      })
    );
  }
}
export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersApiResponse {
  [x: string]: any;
  page: number;
  total_pages: number;
  total: number;
  data: User[];
}