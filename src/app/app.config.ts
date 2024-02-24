import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { UserService } from '@coreServices/common/user.service';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

const loadUserFromStorage = (userService: UserService) => {
  return () => userService.loadUserFromStorage();
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(withInterceptors([])),
    {
      provide: APP_INITIALIZER,
      useFactory: loadUserFromStorage,
      deps: [UserService],
      multi: true,
    },
  ],
};
