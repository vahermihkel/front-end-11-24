import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  private products: Product[] = [];
  categories: Category[] = [];
  idUnique = true;

  constructor(private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res || []; // Firebase võib anda "null" väärtuse
    });
    this.productService.getProducts().subscribe(products => {
      this.products = products || [];
    })
  }

  determineIfIdUnique(form: NgForm) {
    console.log(form.value.id);
    const product = this.products.find(p => p.id === form.value.id);
    if (product === undefined) {
      // Kellelgi pole
      this.idUnique = true;
    } else {
      // Kellelgi on olemas
      this.idUnique = false;
    }
  }

  onSubmit(form: NgForm) {
    // this.productService.getProducts().subscribe(products => {
      form.value.rating = {rate: 0, count: 0};
      this.products.push(form.value);
      this.productService.updateProducts(this.products).subscribe(() => {
        form.reset();
        this.idUnique = true;
      });
    // })
  }
}
