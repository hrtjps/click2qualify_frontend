import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) { }
  
  addQuestion(data) {
    return this.http.post('api/questions', data);
  }

  getAllTaxForms(): Observable<any> {
    return this.http.get('api/forms')
    .pipe(
      catchError(this.handleError.handleError<any>('designer', ''))  
    );
  }
  getUserAllTaxForms(id): Observable<any> {
    return this.http.get(`api/forms/user/${id}`)
    .pipe(
      catchError(this.handleError.handleError<any>('designer', ''))  
    );
  }
}
