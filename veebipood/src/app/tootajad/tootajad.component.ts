import { Component } from '@angular/core';

@Component({
  selector: 'app-tootajad',
  standalone: true,
  imports: [],
  templateUrl: './tootajad.component.html',
  styleUrl: './tootajad.component.css'
})
export class TootajadComponent {
  tootajad = ["???", "???"]

  // sorteeri A-Z
  // sorteeri Z-A
  // tähed kasvavalt
  // tähed kahanevalt
  // neljas täht A-Z
  // sorteeri sõnad arvu järgi

  // filtreeri ????'ga lõppevad
  // vähemalt ???? tähelised
  // täpselt ???? tähelised
  // '????' lühendit sisaldavad
  // kellel on ???'s täht "????"
  // paarisarv tähti sisaldavad

}
