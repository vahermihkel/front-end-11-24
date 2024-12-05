import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products: Toode[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCart();
  }

  tyhjenda() {
    this.cartService.emptyCart();
  }

  kustuta(i: number) {
    this.cartService.removeFromCart(i); // splice kustutamiseks, 
    //  esimene nr tähendab mitmendat, teine mitu tk kustutan
  }

  arvutaKokku() {
    let summa = 0;
    this.products.forEach(toode => {
      summa += toode.hind;
    });
    return summa;
  }
}
