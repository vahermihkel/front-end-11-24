import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  private products: Product[] = [];
  editProductForm!: FormGroup;
  loading = true;
  idUnique = true;
  private urlId!: number;
  private product!: Product;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (urlId === null) {
      return;
    }
    this.urlId = Number(urlId);
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      const product = products.find(p => p.id === Number(urlId));
      this.loading = false;
      if (product === undefined) {
        return;
      }
      this.product = product;
      this.editProductForm = new FormGroup({
        "id": new FormControl(product.id),
        "title": new FormControl(product.title),
        "price": new FormControl(product.price),
        "image": new FormControl(product.image),
        "category": new FormControl(product.category),
        "description": new FormControl(product.description),
      });
    }); 
  }

  determineIfIdUnique() {
      if (this.editProductForm.value.id === this.urlId) {
        this.idUnique = true;
        return;
      }
      const product = this.products.find(p => p.id === this.editProductForm.value.id);
      if (product === undefined) {
        // Kellelgi pole
        this.idUnique = true;
      } else {
        // Kellelgi on olemas
        this.idUnique = false;
      }
    }

  onSubmit() {
    this.editProductForm.value.rating = {
      rate: this.product.rating.rate, 
      count: this.product.rating.count
    };
    const index = this.products.findIndex(p => p.id === this.editProductForm.value.id);
    this.products[index] = this.editProductForm.value;
    this.productService.updateProducts(this.products).subscribe(() => {
      this.router.navigateByUrl("/admin/manage-products");
    });
  }
}
