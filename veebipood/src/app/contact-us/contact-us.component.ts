import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-contact-us',
  standalone: true,//p-rating, ngModel
  imports: [RatingModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  value = 4;

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_fum24bj', 'template_ld2lsyd', e.target as HTMLFormElement, {
        publicKey: 'Xbn0xj_4LjNugxYGl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
