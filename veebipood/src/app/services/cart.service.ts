import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';
import { OstukorviToode } from '../models/OstukorviToode';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: OstukorviToode[] = JSON.parse(localStorage.getItem("cart") || "[]");
  sumSubject = new BehaviorSubject(this.calculateSumOfCart());
  // subject --> koodi käivitamiseks teistes componentides. globaalsete muutujate tegemiseks
//             koodi käivitamiseks kui HTML on koguaeg nähtav, aga kuskil teises componendis
//              käivitatakse mingi kood (see tähendab, et ngOnInit ei käivitu ja update ei toimu)
  countSubject = new BehaviorSubject<number>(this.calculateCount());

  constructor() { }

  calculateSumOfCart() {
    let summa = 0;
    this.cart.forEach(ostukorviToode => {
      summa += ostukorviToode.toode.hind * ostukorviToode.kogus;
    });
    return summa;
  }

  calculateCount() {
    let summa = 0;
    this.cart.forEach(ostukorviToode => {
      summa += ostukorviToode.kogus;
    });
    return summa;
  }

  getCart() {
    return this.cart;
  }

  addToCart(toode: Toode) {
    const leitud = this.cart.find(ostukorviToode => ostukorviToode.toode.nimi === toode.nimi);
    if (leitud !== undefined) {
      //kui on ostukorvis siis suurendan kogust
      leitud.kogus++;
      // leitud.kogus = leitud.kogus + 1;
      // leitud.kogus += 1;
    } else {
      //kui pole ostukorvis, siis lisa lõppu juurde (push)
      const ostukorviToode = {"toode": toode, "kogus": 1};
      this.cart.push(ostukorviToode);
    }  
    this.sumSubject.next(this.calculateSumOfCart());
    this.countSubject.next(this.calculateCount());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  removeFromCart(index: number) {
    this.cart.splice(index,1); // esimene nr mitmendat kustutan, teine nr mitu tk
    this.sumSubject.next(this.calculateSumOfCart());
    this.countSubject.next(this.calculateCount());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  emptyCart() {
    this.cart.splice(0); // alates 0ndast indexist, kui teist nr pole, siis lõpuni välja
    this.sumSubject.next(this.calculateSumOfCart());
    this.countSubject.next(this.calculateCount());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  decreaseQuantity(ostukorviToode: OstukorviToode) {
    ostukorviToode.kogus--;
    if (ostukorviToode.kogus === 0) {
      const i = this.cart.indexOf(ostukorviToode);
      this.removeFromCart(i);
    }
    this.sumSubject.next(this.calculateSumOfCart());
    this.countSubject.next(this.calculateCount());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  increaseQuantity(ostukorviToode: OstukorviToode) {
    ostukorviToode.kogus++;
    this.sumSubject.next(this.calculateSumOfCart());
    this.countSubject.next(this.calculateCount());
    localStorage.setItem("cart", JSON.stringify(this.cart));
  }
}
