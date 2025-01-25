import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  loggedIn!: boolean;
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // this.loggedIn = sessionStorage.getItem("token") !== null;
    this.authService.findUser().subscribe(res => {
      const fbUser = res.users[0];
      const user = new User(
        fbUser.localId, fbUser.email, fbUser.displayName,
        fbUser.photoUrl, fbUser.lastLoginAt);
      this.authService.loggedInSubject.next(user);
    })

    this.authService.loggedInSubject.subscribe(res => {
      this.loggedIn = res.localId !== "";
      this.user = res;
    })
  }

  logout() {
    this.authService.loggedInSubject.next(new User("","","","",0));
    sessionStorage.removeItem("token");
  }
}
