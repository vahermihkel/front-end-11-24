import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr, ToastrModule } from 'ngx-toastr';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimations(), // required animations providers
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      //preventDuplicates: true,
    }),
    provideAnimations(),
    // importProvidersFrom(
    //     ToastrModule.forRoot({
    //         positionClass: "toast-bottom-right",
    //         preventDuplicates: true,
    //         countDuplicates: true,
    //     }),
    // ),
  ]
};
