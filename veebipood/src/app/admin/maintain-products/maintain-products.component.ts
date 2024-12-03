import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Toode } from '../../models/Toode';

@Component({
  selector: 'app-maintain-products',
  standalone: true,
  imports: [],
  templateUrl: './maintain-products.component.html',
  styleUrl: './maintain-products.component.css'
})                                  // kontrolli eesmärgil, et ngOnInit ei muutuks/kaoks
export class MaintainProductsComponent implements OnInit {
  tooted: Toode[] = [];

  // constructor --> seob erinevaid faile
  constructor(private productService: ProductService) {}

  // ngOnInit --> käimaminemise funktsioon ehk kui siia lehele satutakse
  ngOnInit() {
    this.tooted = this.productService.tooted;
  }

  arvutaKokku() {
    let summa = 0;
    // summa = summa + 4;
    // summa = summa + 3;
    // summa = summa + 5;
    this.tooted.forEach(toode => {
      summa = summa + toode.nimi.length;
      //summa += toode.nimi.length;
    });
    return summa;
  }

  kustuta(index: number) {
    this.productService.tooted.splice(index,1);
  }
}
