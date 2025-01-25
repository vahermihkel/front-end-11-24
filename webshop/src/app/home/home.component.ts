import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private dbProducts: Product[] = [];
  products: Product[] = [];
  categories: Category[] = [];

  constructor(private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res || []; // Firebase võib anda "null" väärtuse
    });
    this.productService.getProducts().subscribe(res => {
      this.products = res || [];
      this.dbProducts = res || [];
    });
  }

  filterByCategory(categoryName: string) {
    this.products = this.dbProducts.filter(product => product.category === categoryName)
  }
}
