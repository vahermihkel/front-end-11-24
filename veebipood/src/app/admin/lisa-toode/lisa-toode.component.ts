import { Component } from '@angular/core';
import { Toode } from '../../models/Toode';
import { ProductService } from '../../services/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-lisa-toode',
  standalone: true,
  imports: [FormsModule, TranslatePipe],
  templateUrl: './lisa-toode.component.html',
  styleUrl: './lisa-toode.component.css'
})
export class LisaToodeComponent {
  tooted: Toode[] = [];
  sonum = "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
   this.tooted = this.productService.tooted;
  }

  lisaToode(form: NgForm) {
    this.tooted.push(form.value);
    form.reset();
    this.sonum = "Toode lisatud!";
  }
}
