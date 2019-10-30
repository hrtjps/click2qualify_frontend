import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient,
    private handleError: HandleErrorService
  ) { }

  payWithStripe(data) {
    return this.http.post('api/payment/stripe', data);
  }
}
