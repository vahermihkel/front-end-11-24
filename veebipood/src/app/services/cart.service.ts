import { Injectable } from '@angular/core';
import { Toode } from '../models/Toode';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Toode[] = [];

  constructor() { }
}
