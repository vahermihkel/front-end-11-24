import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Toode } from '../../models/Toode';
import { TranslatePipe } from '@ngx-translate/core';
import { ExtenderDirective } from '../../directives/extender.directive';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, TranslatePipe, ExtenderDirective],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  tooted: Toode[] = [];
  lisatavaTooteNimi = "";
  lisatavaTooteHind = 0;
  lisatavaTooteAktiivne = false;
  lisatavaTootePilt = "";
  sonum = "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
   this.tooted = this.productService.tooted;
  }

  lisaToode() {
    if (this.lisatavaTooteNimi === "") {
      this.sonum = "Tühja nimetusega ei saa toodet lisada!"
      return; // ära siit edasi mine
    }
    if (this.lisatavaTooteNimi[0].toLowerCase() === this.lisatavaTooteNimi[0]) {
      this.sonum = "Toodet ei saa lisada väikse algustähega!"
      return; // ära siit edasi mine
    }
    if (this.lisatavaTooteNimi.includes("#") || this.lisatavaTooteNimi.includes("{")
      || this.lisatavaTooteNimi.includes("!") || this.lisatavaTooteNimi.includes("¤")
    ) {
      this.sonum = "Kasutatud on mittelubatud märke!"
      return; // ära siit edasi mine
    }
    // if (this.tooted.includes(this.lisatavToode)) {
    //   this.sonum = "Toode on juba lisatud!"
    //   return;
    // }
    this.tooted.push({
      nimi: this.lisatavaTooteNimi, 
      hind: this.lisatavaTooteHind, 
      aktiivne: this.lisatavaTooteAktiivne, 
      pilt: this.lisatavaTootePilt
    });
    this.lisatavaTooteNimi = "";
    this.lisatavaTooteHind = 0;
    this.lisatavaTootePilt = "";
    this.lisatavaTooteAktiivne = false;
    this.sonum = "Toode lisatud!";
  }
}
