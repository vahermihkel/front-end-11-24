import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // user!: User;
  editProfileForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loggedInSubject.subscribe(res => {
      this.editProfileForm = new FormGroup({
        localId: new FormControl({value: res.localId, disabled: true}),
        email: new FormControl({value: res.email, disabled: true}),
        displayName: new FormControl(res.displayName),
        photoUrl: new FormControl(res.photoUrl),
        lastLoginAt: new FormControl({value: new Date(Number(res.lastLoginAt)), disabled: true})
      })
    })
  }

  onSubmit() {
    this.authService.updateUser(this.editProfileForm.value).subscribe({
      next: res => console.log(res),
      error: res => console.log(res) 
    })
  }
}
