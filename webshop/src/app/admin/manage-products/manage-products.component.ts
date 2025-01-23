import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {
  products: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  deleteProduct(productId: number) {
    this.productService.getProducts().subscribe(products => {
      const index = products.findIndex(p => p.id === productId);
      products.splice(index,1);
      this.productService.updateProducts(products).subscribe(res => {
        this.products = res;
      });
    });
  }
}
