import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import {TranslateService} from "@ngx-translate/core";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'veebipood';
  isDarkMode = localStorage.getItem("dark-mode") === "true";

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['et', 'en']);
    if (this.translate.getLangs().includes(localStorage.getItem("language") || "")) {
      this.translate.setDefaultLang(localStorage.getItem("language") || "en");
    } else {
      this.translate.setDefaultLang("en");
      localStorage.setItem("language", "en");
    }
    //this.translate.getBrowserLang() || "en"
    // this.translate.use('en');
  }

  setDarkMode(isDark: boolean) {
    this.isDarkMode = isDark;
    localStorage.setItem("dark-mode", String(isDark));
  }
}

// ngForm
// kogus ostukorvis --> keeruline   objekt objektis
// subject - ostukorvi summa Navbari
// URL parameeter
// Reactive Form
// alamkomponendid ja andmete saatmine. dark-mode korda teha
// pipe  | translate.
// directives   HTML-atribuut   class=""  disabled
// Kaardirakendus - Leaflet / Google Maps
// E-maili saatmine
// API päringud -> 
// - tarnija tooted
// - pakiautomaadid Omniva
// - makse (tagasi kaupmehe juurde) EveryPay
// andmebaas - Firebase
// Autentimine -> sisselogimine/registreerumine Firebase

// Mobiilirakendused -> Ionic
// Back-end -> Spring/Java

// L 7.12
// T 10.12
// R 13.12
// T 17.12
// R 20.12
// jõuluajal kohtumisi arutame kuupäevade lähenedes

// KOKKU: 15 kohtumist
// 60ak/h --> 4ak/h   60/4=15