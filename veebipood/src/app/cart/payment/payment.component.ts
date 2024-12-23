import { Component } from '@angular/core';
import { PaymentService } from './payment.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {

  constructor(private paymentService: PaymentService,
    private cartService: CartService
  ) {}

  pay() {
    this.paymentService.makeEveryPayPayment(this.cartService.calculateSumOfCart()).subscribe(res => {
      window.location.href = res.payment_link  
    });
  }
}
