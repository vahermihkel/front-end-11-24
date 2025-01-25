import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  message = "";

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.authService.login(form.value.email, form.value.password).subscribe({
      next: res => {
        sessionStorage.setItem("token", res.idToken);
        this.router.navigateByUrl("/admin");
        this.authService.findUser().subscribe(res => {
          const fbUser = res.users[0];
          const user = new User(
            fbUser.localId, fbUser.email, fbUser.displayName,
            fbUser.photoUrl, fbUser.lastLoginAt);
          this.authService.loggedInSubject.next(user);
        })
      },
      error: res => {
        this.message = res.error.error.message;
      }
    }
  );
  }
}
