import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';
import { OstukorviToode } from '../models/OstukorviToode';
import { ParcelMachinesComponent } from "./parcel-machines/parcel-machines.component";
import { PaymentComponent } from "./payment/payment.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ParcelMachinesComponent, PaymentComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: OstukorviToode[] = [];

  constructor(private cartService: CartService) {
    console.log("1. Logimine constructorist - failide ühendamiseks");
  }

  ngOnInit(): void {
    this.products = this.cartService.getCart();
    console.log("2. Logimine ngOnInitist - muutujatele väärtuste andmiseks");
    console.log("3. HTML");
  }

  tyhjenda() {
    this.cartService.emptyCart();
  }

  decreaseKogus(ostukorviToode: OstukorviToode) {
    this.cartService.decreaseQuantity(ostukorviToode);
  }

  increaseKogus(ostukorviToode: OstukorviToode) {
    this.cartService.increaseQuantity(ostukorviToode);
  }

  kustuta(i: number) {
    this.cartService.removeFromCart(i); // splice kustutamiseks, 
    //  esimene nr tähendab mitmendat, teine mitu tk kustutan
  }

  arvutaKokku() {
    return this.cartService.calculateSumOfCart();
  }
}
