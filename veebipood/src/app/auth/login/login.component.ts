import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // kui on eriasi HTMLs, siis pean siin importima selle
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  login(loginForm: NgForm) {
    console.log(loginForm)
    console.log(loginForm.value);
    // TODO: Vaata kas ikka tegelikult läheb sisselogituks
    this.authService.isLoggedIn.next(true);
    this.router.navigateByUrl("/admin");
  }
}
