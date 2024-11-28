import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-maintain-products',
  standalone: true,
  imports: [],
  templateUrl: './maintain-products.component.html',
  styleUrl: './maintain-products.component.css'
})                                  // kontrolli eesmärgil, et ngOnInit ei muutuks/kaoks
export class MaintainProductsComponent implements OnInit {
  tooted: string[] = [];

  // constructor --> seob erinevaid faile
  constructor(private productService: ProductService) {}

  // ngOnInit --> käimaminemise funktsioon ehk kui siia lehele satutakse
  ngOnInit() {
    this.tooted = this.productService.tooted;
  }

  kustuta(index: number) {
    this.productService.tooted.splice(index,1);
  }
}
