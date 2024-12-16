import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Toode } from '../models/Toode';

@Component({
  selector: 'app-yks-toode',
  standalone: true,
  imports: [],
  templateUrl: './yks-toode.component.html',
  styleUrl: './yks-toode.component.css'
})
export class YksToodeComponent implements OnInit {
  toode!: Toode;

  constructor(private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {            // peab ühtima sellega mis on URLs :taga
    const tooteNimi = this.route.snapshot.paramMap.get("nimi");
    if (tooteNimi !== null) {
      const leitud = this.productService.tooted.find(t => t.nimi === tooteNimi);
      if (leitud !== undefined) {
        this.toode = leitud;
      }
    }
  }
}
