import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  summa = 0;

  constructor(private translate: TranslateService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.sumSubject.subscribe(sum => {
      this.summa = sum;
      console.log(this.summa); // käivitub nüüd iga kord kui: subSubject.next();
    });
    console.log("Käivitasin ngOnIniti navbar sees"); // 1x
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }
}
