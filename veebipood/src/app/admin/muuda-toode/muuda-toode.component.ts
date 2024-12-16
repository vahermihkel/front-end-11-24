import { Component, OnInit } from '@angular/core';
import { Toode } from '../../models/Toode';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-muuda-toode',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './muuda-toode.component.html',
  styleUrl: './muuda-toode.component.css'
})
export class MuudaToodeComponent implements OnInit {
  // toode!: Toode;
  muudaToodeForm!: FormGroup;
  private index!: number;

  constructor(private route: ActivatedRoute, // route -> ametlik Angular dok
    private productService: ProductService,
    private router: Router // router
  ) {}

  ngOnInit(): void {
    const urlIndex = this.route.snapshot.paramMap.get("index");
    if (urlIndex === null) {
      return; // lõpeta funktsioon
    }
    this.index = Number(urlIndex);
    const leitud = this.productService.tooted[this.index];
    if (leitud === undefined) {
      return;
    }
    // this.toode = leitud;
    this.muudaToodeForm = new FormGroup({
      nimi: new FormControl(leitud.nimi),
      hind: new FormControl(leitud.hind),
      pilt: new FormControl(leitud.pilt),
      aktiivne: new FormControl(leitud.aktiivne)
    });
  }

  onSubmit() {
    this.productService.tooted[this.index] = this.muudaToodeForm.value;
    this.router.navigateByUrl("/maintain-products");
  }
}
