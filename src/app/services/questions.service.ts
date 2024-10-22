import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) { }
  
  addQuestion(data) {
    return this.http.post('api/questions', data);
  }
  updateQuestion(id, data){
    return this.http.put(`api/questions/${id}`, data);
  }
  deleteQuestion(id) {
    return this.http.delete(`api/questions/${id}`);
  }
  getAllQuestions(): Observable<any> {
    return this.http.get('api/questions/')
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  getQuestion(id): Observable<any> {
    return this.http.get(`api/questions/${id}`)
    .pipe(
      catchError(this.handleError.handleError<any>('', ''))  
    );
  }
  getTotalCount() {
    return this.http.get('api/questions/count')
  }
}
