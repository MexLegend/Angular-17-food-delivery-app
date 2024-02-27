import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { UserService } from '@coreServices/common/user.service';
import { provideOAuthClient } from 'angular-oauth2-oidc';

const loadUserFromStorage = (userService: UserService) => {
  return () => userService.loadUserFromStorage();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideAnimations(),
    provideHttpClient(withInterceptors([])),
    provideOAuthClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserFromStorage,
      deps: [UserService],
      multi: true,
    },
  ],
};
