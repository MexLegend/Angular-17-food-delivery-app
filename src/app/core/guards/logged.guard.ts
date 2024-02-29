import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AUTH_REDIRECT } from '@constants/auth-redirect.constant';
import { UserService } from '@coreServices/common/user.service';

export const loggedGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const isLoggedIn = userService.isLoggedIn();

  if (!isLoggedIn) {
    return router.navigate(['auth'], {
      queryParams: { [AUTH_REDIRECT]: state.url },
    });
  } else {
    return true;
  }
};
