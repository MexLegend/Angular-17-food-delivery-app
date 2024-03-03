import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AuthService } from '@coreServices/common/auth.service';

const loadUserFromStorage = (authService: AuthService) => {
  return () => authService.loadUserFromStorage();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideHttpClient(withInterceptors([])),
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserFromStorage,
      deps: [AuthService],
      multi: true,
    },
  ],
};
