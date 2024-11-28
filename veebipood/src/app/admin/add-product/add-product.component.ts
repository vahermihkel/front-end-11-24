import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  tooted = ["Nobe", "BMW", "Tesla"];
  lisatavToode = "";
  sonum = "";

  lisaToode() {
    if (this.lisatavToode === "") {
      this.sonum = "Tühja nimetusega ei saa toodet lisada!"
      return; // ära siit edasi mine
    }
    if (this.lisatavToode[0].toLowerCase() === this.lisatavToode[0]) {
      this.sonum = "Toodet ei saa lisada väikse algustähega!"
      return; // ära siit edasi mine
    }
    if (this.lisatavToode.includes("#") || this.lisatavToode.includes("{")
      || this.lisatavToode.includes("!") || this.lisatavToode.includes("¤")
    ) {
      this.sonum = "Kasutatud on mittelubatud märke!"
      return; // ära siit edasi mine
    }
    if (this.tooted.includes(this.lisatavToode)) {
      this.sonum = "Toode on juba lisatud!"
      return;
    }
    this.tooted.push(this.lisatavToode);
    this.lisatavToode = "";
    this.sonum = "Toode lisatud!";
  }
}
