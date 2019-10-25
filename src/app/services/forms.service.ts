import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService,
    private authService: AuthService,
  ) { }
  
  getAllTaxForms(): Observable<any> {
    return this.http.get('api/forms')
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  getUserAllTaxForms(userId): Observable<any> {
    return this.http.get(`api/forms/user/${userId}`)
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }

  addQA(questionId, taxId, data) {
    let qaData = {
      user_id: this.authService.userId,
      tax_id: taxId,
      question_id: questionId,
      answer: {...data}
    } 
    return this.http.post('api/answers', qaData);
  }
  newForm(userId) {
    return this.http.post(`api/forms`, {last_slug: 'owe-container', user_id: userId});
  }
}
