import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTH_REDIRECT } from '@constants/auth-redirect.constant';
import { AuthService } from '@coreServices/common/auth.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();

  if (!isLoggedIn) {
    return router.navigate(['auth'], {
      queryParams: { [AUTH_REDIRECT]: state.url },
    });
  } else {
    return true;
  }
};
