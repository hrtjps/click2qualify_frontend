import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  register(user: User) {
    return this.http.post('auth/register', user);
  }

  update(id, user) {
    return this.http.put(`auth/update/${id}`, user);
  }

  changePassword(id, data) {
    return this.http.put(`auth/change-password/${id}`, data);
  }

  getAllUsers(): Observable<any> {
    return this.http.get('api/users/')
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  getUser(id): Observable<any> {
    return this.http.get(`api/users/${id}`)
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  deleteUser(id) {
    return this.http.delete(`api/users/${id}`)
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  updateUser(id, data) {
    return this.http.put(`api/users/${id}`, data)
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
}