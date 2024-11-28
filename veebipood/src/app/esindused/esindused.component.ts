import { Component } from '@angular/core';

@Component({
  selector: 'app-esindused',
  standalone: true,
  imports: [],
  templateUrl: './esindused.component.html',
  styleUrl: './esindused.component.css'
})
export class EsindusedComponent {
  esindused = ["Kristiine", "Ülemiste", "Rocca al Mare", "Vesse m", "Järveotsa", "Mustamäe", "Viru keskus", "Solaris"]

  // sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // neljas täht A-Z
  // sorteeri sõnad arvu järgi

  // filtreeri E'ga lõppevad
  // vähemalt 7 tähelised
  // täpselt 9 tähelised
  // 'is' lühendit sisaldavad
  // kellel on 4s täht "s"
  // paarisarv tähti sisaldavad

}
