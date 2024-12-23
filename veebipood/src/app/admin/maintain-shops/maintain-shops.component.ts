import { Component } from '@angular/core';

@Component({
  selector: 'app-maintain-shops',
  standalone: true,
  imports: [],
  templateUrl: './maintain-shops.component.html',
  styleUrl: './maintain-shops.component.css'
})
export class MaintainShopsComponent {
  // lisa URL routes sisse et saaks siia componenti tulla
  // lisa admin-home sisse nupp millele vajutades läheb sellele URL-le

  // võta kõik esindused Service-i seest
  // kuva välja HTMLs
  // võimalda esindusi kustutada

  // võimalda esindusi muutma minna --> siit failist nupuvajutusega
  // tehtud URL .routes sisse, kus on ka URLi muutuja kooloni abil tähistatud

  // edit-shop sees peab võtma selle URLi muutuja ja selle abil otsima minema õiget shopi
  // samasugune kood nagu edit-product
}
