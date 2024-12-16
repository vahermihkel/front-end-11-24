import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup; // hüüumärk --> alguses väärtust ei anna

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl("@gmail.com", [Validators.required, Validators.email]),
      parool: new FormControl("", [Validators.required]),
      eesnimi: new FormControl(""),
      perenimi: new FormControl("")
    })
  }

  changeProfile() {
    console.log(this.profileForm.value);
  }
}
