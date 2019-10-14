import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';


const CUR_USER = "currentUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(CUR_USER)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>('auth/login', {email, password})
      .pipe(map(user => {
        if(user && user.token) {
          localStorage.setItem(CUR_USER, JSON.stringify(user.result));
          this.currentUserSubject.next(user);
        }
        return user;
      }))
  }

  logout() {
    localStorage.removeItem(CUR_USER);
    this.currentUserSubject.next(null);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem(CUR_USER));
    return (user !== null)? true: false;
    // return (user !== null && user.emailVerified !== false)? true: false;
  }
  


}
