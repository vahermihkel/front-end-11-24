import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  summa = 0;
  count = 0;
  isLoggedIn = false;
  @Input() darkTheme = false; // võrdusmärgiga väärtus pole oluline, sest see kirjutatakse üle
// @Input --> kes ta kasutusele võttis (<app-navbar/>) saadab selle muutuja.
// saata saab nii: <app-navbar [muutuja_nimi_@Input_järel]="väärtus_mis_saadetakse" />
  @Output() sendDarkTheme = new EventEmitter();

  constructor(private translate: TranslateService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.sumSubject.subscribe(sum => {
      this.summa = sum;
      console.log(this.summa); // käivitub nüüd iga kord kui: subSubject.next();
    });
    console.log("Käivitasin ngOnIniti navbar sees"); // 1x
    this.cartService.countSubject.subscribe(response => {
      this.count = response;
    })
    this.authService.isLoggedIn.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigateByUrl("/");
  }

  setDarkMode(isDark: boolean) {
    this.darkTheme = isDark;
    this.sendDarkTheme.next(isDark);
    localStorage.setItem("dark-mode", String(isDark));
  }
}
