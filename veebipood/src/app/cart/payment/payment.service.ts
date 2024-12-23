import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  makeEveryPayPayment(sum: number) {
    const url = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";
    const payload = {
      "account_name": "EUR3D1",
      "nonce": "16512eda" + new Date() + Math.random() * 999999,
      "timestamp": new Date(),
      "amount": sum,
      "order_reference": Math.random() * 999999,
      "customer_url": "https://veebipood-11-24.web.app",
      "api_username": "92ddcfab96e34a5f"
    }
    const headers = {
      "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA==",
      "Content-Type": "application/json"
    }
    return this.http.post<any>(url, payload, {headers});
  }
}
