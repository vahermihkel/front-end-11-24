import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // kui on eriasi HTMLs, siis pean siin importima selle
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login(loginForm: NgForm) {
    console.log(loginForm)
    console.log(loginForm.value);
  }
}
