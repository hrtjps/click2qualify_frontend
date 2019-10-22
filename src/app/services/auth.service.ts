import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


const CUR_USER = "currentUser";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(
    public http: HttpClient,
    private router: Router
  ) { 
    let store = localStorage.getItem(CUR_USER);
    if(store){
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(store));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(new User());
    }
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>('auth/login', {email, password})
      .pipe(map(user => {
        if(user && user.token) {
          localStorage.setItem(CUR_USER, JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      }))
  }

  logout() {
    localStorage.removeItem(CUR_USER);
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem(CUR_USER);
    return (user && JSON.parse(user))? true: false;
    // return (user !== null && user.emailVerified !== false)? true: false;
  }
  get userId() {
    const user =JSON.parse(localStorage.getItem(CUR_USER));
    return (user && user.id)?user.id:'';
  }
}
