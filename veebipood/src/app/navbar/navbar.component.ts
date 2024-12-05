import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private translate: TranslateService) {}

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem("language", language);
  }
}
