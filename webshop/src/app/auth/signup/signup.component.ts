import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/User';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  message = "";

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(form: NgForm) {
    this.authService.signup(form.value.email, form.value.password).subscribe({
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
