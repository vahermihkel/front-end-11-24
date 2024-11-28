import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // kooloniga määran tüüpi, võrdusmärgiga annan väärtust
  tooted: string[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {                    // kustutab ära mälukoha
    this.tooted = this.productService.tooted.slice();
  }

  // kui võrdlen sõnu, siis: localeCompare
  // kui võrdlen numbreis, siis lahutustehe

  sorteeriAZ() {
    // a- "Nobe" b-"BMW" ---> võrdleb neid
    // a- "BMW"  b-"Tesla" ---> võrdleb neid
    this.tooted.sort((a,b) => a.localeCompare(b))
  }

  sorteeriZA() {
    this.tooted.sort((a,b) => b.localeCompare(a))
  }

  sorteeriTahedKasv() {
    this.tooted.sort((a,b) => a.length - b.length)
  }

  sorteeriTahedKah() {
    this.tooted.sort((a,b) => b.length - a.length)
  }
                            //  012
  sorteeriKolmasTahtAZ() {   // Bentley
    this.tooted.sort((a,b) => a[2].localeCompare(b[2]))
  }

  filtreeriLoppevadTahegaA(){
    this.tooted = this.tooted.filter(toode => toode.endsWith("a"));
  }

  filtreeriTapselt5Tahelised(){
    this.tooted = this.tooted.filter(toode => toode.length === 5);
  }

  filtreeriKuniVoiTapselt6Tahelised(){
    this.tooted = this.tooted.filter(toode => toode.length <= 6);
  }

  filtreeriKellelLyhendBE(){
    this.tooted = this.tooted.filter(toode => toode.toLowerCase().includes("be"));
  }

  filtreeriKolmasTahtS(){
    this.tooted = this.tooted.filter(toode => toode[2] === "s");
  }
}
