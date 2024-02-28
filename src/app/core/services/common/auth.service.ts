import {
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Observable, delay, finalize, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';
import { IUser } from '@models/user.interface';
import { KEY_STORAGE } from '@models/storage.enum';
import {
  AuthActionType,
  IFacebookDialogResponse,
  ILoginData,
  IRegisterData,
} from '@models/auth.interface';
import { accounts } from 'google-one-tap';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _storageService = inject(LocalStorageService);
  private readonly _userService = inject(UserService);
  private readonly _$isLoading: WritableSignal<boolean> = signal(false);
  private readonly _$googleButtonWrapper: WritableSignal<HTMLButtonElement | null> =
    signal(null);

  getIsLoading(): Signal<boolean> {
    return this._$isLoading.asReadonly();
  }

  stopIsLoading(): void {
    return this._$isLoading.set(false);
  }

  login(loginData: ILoginData): Observable<IUser> {
    this._$isLoading.set(true);

    const user: IUser = {
      name: 'PrograMarc',
      email: loginData.email,
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  register(registerData: IRegisterData): Observable<IUser> {
    this._$isLoading.set(true);

    const user: IUser = {
      name: 'PrograMarc',
      email: registerData.email,
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  initGoogleAuthConfig(authAction: AuthActionType) {
    const googleAccounts: accounts = google.accounts;

    this._initializeGoogleSignIn(authAction, googleAccounts);
    this._renderGoogleSignInButton(googleAccounts);
  }

  private _initializeGoogleSignIn(
    authAction: AuthActionType,
    googleAccounts: accounts
  ) {
    googleAccounts.id.initialize({
      client_id: environment.GOOGLE_CLIENT_ID,
      callback: ({ credential }) => {
        if (authAction === 'LOGIN') {
          this.googleLogin(credential).subscribe();
        } else {
          this.googleRegister(credential).subscribe();
        }
      },
    });
  }

  private _renderGoogleSignInButton(googleAccounts: accounts) {
    const googleLoginWrapper = document.getElementById('gbtn') as HTMLElement;

    googleAccounts.id.renderButton(
      document.getElementById('gbtn') as HTMLElement,
      {}
    );

    const googleLoginButton = googleLoginWrapper.querySelector(
      'div[role=button]'
    ) as HTMLButtonElement;

    this._$googleButtonWrapper.set(googleLoginButton);
  }

  openGoogleAuthDialog(): void {
    this._$googleButtonWrapper()?.click();
  }

  googleLogin(credential: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Google Login: ', credential);

    const user: IUser = {
      name: 'PrograMarc',
      email: 'armandolarae97@gmail.com',
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  googleRegister(credential: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Google Register: ', credential);

    const user: IUser = {
      name: 'PrograMarc',
      email: 'armandolarae97@gmail.com',
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  openFacebookAuthDialog(authAction: AuthActionType): void {
    FB.login(
      async (result: IFacebookDialogResponse) => {
        const accessToken = result.authResponse.accessToken;

        if (authAction === 'LOGIN') {
          this.facebookLogin(accessToken).subscribe();
        } else {
          this.facebookRegister(accessToken).subscribe();
        }
      },
      { scope: 'email' }
    );
  }

  facebookLogin(credential: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Facebook Login: ', credential);

    const user: IUser = {
      name: 'PrograMarc',
      email: 'armandolarae97@gmail.com',
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  facebookRegister(credential: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Facebook Register: ', credential);

    const user: IUser = {
      name: 'PrograMarc',
      email: 'armandolarae97@gmail.com',
    };

    return of(user).pipe(
      delay(1000),
      finalize(() => {
        this._$isLoading.set(false);
      })
    );
  }

  logout(): Observable<void> {
    return new Observable((observer) => {
      FB.logout();
      this._storageService.removeItem(KEY_STORAGE.DATA_USER);
      this._userService.setUserData(null);
      observer.next();
      observer.complete();
    });
  }
}
