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

  changeDarkMode(darkModeFromNavbar: boolean) {
    this.isDarkMode = darkModeFromNavbar;
  }
  
}

// +ngForm
// --> +kogus ostukorvis --> keeruline   objekt objektis
// --> +subject - ostukorvi summa Navbari
// +E-maili saatmine
// API päringud -> 
// - tarnija tooted
// 1. https://api.escuelajs.co/api/v1/products KOOS -> supplier-escuela
// 2. https://restcountries.com/v3.1/all?fields=name KOOS -> restcountries

// https://fakestoreapi.com/products KOJU -> supplier-store
// https://www.freetestapi.com/api/v1/books KOJU -> supplier-book
// https://www.freetestapi.com/api/v1/countries KOJU -> ng g c admin/api/countries
// https://marineregions.org/rest/getGazetteerTypes.json KOJU -> ng g c admin/api/dictionary

// https://environment.data.gov.uk/flood-monitoring/id/floods KOOS
// https://dashboard.elering.ee/api/nps/price KOOS
// https://api.itbook.store/1.0/search/angular
// https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit=100

// - pakiautomaadid Omniva
// - makse (tagasi kaupmehe juurde) EveryPay
// ++Kaardirakendus - Leaflet / Google Maps
// ++URL parameeter
// ++Reactive Form
// pipe  | translate.
// andmebaas - Firebase
// alamkomponendid ja andmete saatmine. dark-mode korda teha
// directives   HTML-atribuut   class=""  disabled
// Autentimine -> sisselogimine/registreerumine Firebase

// Mobiilirakendused -> Ionic
// Back-end -> Spring/Java

// 4.----> järgi teha
// L 7.12
// E 09.12
// 8. R 13.12 KOJU: Bakery-shop. API otspunktid. Tootajad/Esindused muuda. Subject alamkomponendid. subject. KOJU: Webshop
// 9. E 23.12
//10. N 26.12
//11. L 28.12
//13. T 31.12
//14. R 03.01
// 4. K 08.01
//15a.K 22.01 9.00-10.30
//15b.K 29.01 9.00-10.30

// 29.01 ---> ametlik lõpuaeg

// KOKKU: 15 kohtumist
// 60ak/h --> 4ak/h   60/4=15