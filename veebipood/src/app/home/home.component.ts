import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Toode } from '../models/Toode';
import { ToastrService } from 'ngx-toastr';
import { TranslatePipe } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CurrencyPipe, DatePipe, PercentPipe } from '@angular/common';
import { ShortenerPipe } from '../pipes/shortener.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TranslatePipe, FormsModule, RouterLink, DatePipe, 
    PercentPipe, CurrencyPipe, ShortenerPipe], // | translate, [(ngModel)]
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // kooloniga määran tüüpi, võrdusmärgiga annan väärtust
  kuupaev = new Date();
  number = 50000000;
  tooted: Toode[] = [];
  otsing = "";
  tahemargid = 5;

  constructor(private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {                    // kustutab ära mälukoha
    this.tooted = this.productService.tooted.slice();
  }

  // kui võrdlen sõnu, siis: localeCompare
  // kui võrdlen numbreis, siis lahutustehe

  sorteeriAZ() {
    // a- "Nobe" b-"BMW" ---> võrdleb neid
    // a- "BMW"  b-"Tesla" ---> võrdleb neid
    this.tooted.sort((a,b) => a.nimi.localeCompare(b.nimi))
  }

  sorteeriZA() {
    this.tooted.sort((a,b) => b.nimi.localeCompare(a.nimi))
  }

  sorteeriTahedKasv() {
    this.tooted.sort((a,b) => a.nimi.length - b.nimi.length)
  }

  sorteeriTahedKah() {
    this.tooted.sort((a,b) => b.nimi.length - a.nimi.length)
  }
                            //  012
  sorteeriKolmasTahtAZ() {   // Bentley
    this.tooted.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]))
  }

  filtreeriLoppevadTahegaA(){
    this.tooted = this.productService.tooted.filter(toode => toode.nimi.endsWith("a"));
  }

  filtreeriTapselt5Tahelised(){
    this.tooted = this.productService.tooted.filter(toode => toode.nimi.length === 5);
  }

  filtreeriKuniVoiTapselt6Tahelised(){
    this.tooted = this.productService.tooted.filter(toode => toode.nimi.length <= 6);
  }

  filtreeriKellelLyhendBE(){
    this.tooted = this.productService.tooted.filter(toode => toode.nimi.toLowerCase().includes("be"));
  }

  filtreeriKolmasTahtS(){
    this.tooted = this.productService.tooted.filter(toode => toode.nimi[2] === "s");
  }

  lisaOstukorvi(toode: Toode) {
    this.cartService.addToCart(toode);
    this.toastr.success('Toode lisatud ostukorvi!', toode.nimi);
  }

  otsi() {
    this.tooted = this.productService.tooted.filter(toode => toode.nimi.toLowerCase().includes(this.otsing.toLowerCase()));
  }
}
