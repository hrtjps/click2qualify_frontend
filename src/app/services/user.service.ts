import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from './handle-error.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  private _users = new BehaviorSubject<any[]>([]);
  private dataStore: { users: any[] } = { users: [] };
  readonly users = this._users.asObservable();

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) {}

  register(user: User) {
    return this.http.post('auth/register', user);
  }

  loadAll() {
    this.http.get(`api/users/`).subscribe((data: any) => {
      console.log(data.data);
      this.dataStore.users = data.data;
      this._users.next(Object.assign({}, this.dataStore).users);
    }, error => console.log('Could not load todos.'));
  }

  getAllUsers(): Observable<any> {
    return this.http.get('api/users/')
    .pipe(
      catchError(this.handleError.handleError<any>('designer', ''))  
    );
  }
}