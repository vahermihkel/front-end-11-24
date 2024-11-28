import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  tooted = ["Nobe", "BMW", "Tesla", "Volvo", "Ford", "Saab", "Bentley", "Nissan", "Toyota"];

  constructor() { }
}
