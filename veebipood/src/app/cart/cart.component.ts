import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products = ["Coca", "Fanta", "Sprite"];

  tyhjenda() {
    this.products = [];
  }

  kustuta(i: number) {
    this.products.splice(i, 1); // splice kustutamiseks, 
    //  esimene nr tähendab mitmendat, teine mitu tk kustutan
  }
}
