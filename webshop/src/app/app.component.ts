import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webshop';
}

// T 14.01
// N 16.01 - db
// T 21.01 - db+autentimine
// R 24.01 - autentimine
// T 28.01 - ülejäänud teemad: CSS, payment, Subject, Cart (LS)
// T 11.02 --> ?? lõpuprojekti mingisugused tõstatused
// T 18.02 --> lõpuprojekt valmis (esitlemine). Angularis.

// Koos: Admin kaust + Auth kaust
// Ülejäänud kõik kodus