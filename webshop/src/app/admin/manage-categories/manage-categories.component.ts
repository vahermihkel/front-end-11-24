import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-categories',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './manage-categories.component.html',
  styleUrl: './manage-categories.component.scss'
})
export class ManageCategoriesComponent {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res || []; // Firebase võib anda "null" väärtuse
    });
  }

  deleteCategory(categoryName: string) {
    this.categoryService.getCategories().subscribe(categories => {
      const index = categories.findIndex(c => c.name === categoryName);
      categories.splice(index,1);
      this.categoryService.updateCategories(categories).subscribe(res => {
        this.categories = res;
      });
    });
  }

  onSubmit(form: NgForm) {
    this.categories.push(form.value);
    this.categoryService.updateCategories(this.categories).subscribe(() => {
      form.reset();
    });
  }
}
