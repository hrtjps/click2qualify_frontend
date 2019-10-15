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

  getAllUsers(): Observable<any> {
    return this.http.get('api/users/')
    .pipe(
      catchError(this.handleError.handleError<any>('designer', ''))  
    );
  }
}