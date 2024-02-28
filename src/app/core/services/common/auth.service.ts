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
import { Router } from '@angular/router';
import { BaseApiService } from '@models/base-api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseApiService {
  private readonly _router = inject(Router);
  private readonly _storageService = inject(LocalStorageService);
  private readonly _userService = inject(UserService);
  private readonly _$isLoading: WritableSignal<boolean> = signal(false);
  private readonly _$googleButtonWrapper: WritableSignal<HTMLButtonElement | null> =
    signal(null);

  constructor() {
    super('auth');
  }

  getIsLoading(): Signal<boolean> {
    return this._$isLoading.asReadonly();
  }

  stopIsLoading(): void {
    return this._$isLoading.set(false);
  }

  signIn(loginData: ILoginData): Observable<IUser> {
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

    return this.post('signin');
  }

  signUp(registerData: IRegisterData): Observable<IUser> {
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

    return this.post('signup');
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

  authenticateUser(userData: IUser): void {
    this._userService.setUserData(userData);
    this._storageService.setItem(KEY_STORAGE.DATA_USER, userData);
    this._router.navigateByUrl('/');
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
          this.googleSignIn(credential).subscribe();
        } else {
          this.googleSignUp(credential).subscribe();
        }
      },
    });
  }

  private _renderGoogleSignInButton(googleAccounts: accounts) {
    const googleSignInWrapper = document.getElementById('gbtn') as HTMLElement;

    googleAccounts.id.renderButton(
      document.getElementById('gbtn') as HTMLElement,
      {}
    );

    const googleSignInButton = googleSignInWrapper.querySelector(
      'div[role=button]'
    ) as HTMLButtonElement;

    this._$googleButtonWrapper.set(googleSignInButton);
  }

  authenticateByGoogle(): void {
    this._$googleButtonWrapper()?.click();
  }

  googleSignIn(credential: string): Observable<IUser> {
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

    return this.post('google/signin');
  }

  googleSignUp(credential: string): Observable<IUser> {
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

    return this.post('google/signup');
  }

  authenticateByFacebook(authAction: AuthActionType): Observable<IUser> {
    return new Observable((observer) => {
      FB.login(
        async (result: IFacebookDialogResponse) => {
          const accessToken = result.authResponse.accessToken;
          let authObservable: Observable<IUser>;

          if (authAction === 'LOGIN') {
            authObservable = this.facebookSignIn(accessToken);
          } else {
            authObservable = this.facebookSignUp(accessToken);
          }

          authObservable.subscribe({
            next: (user) => {
              observer.next(user);
              observer.complete();
            },
            error: (error) => observer.error(error),
          });
        },
        { scope: 'email' }
      );
    });
  }

  facebookSignIn(credential: string): Observable<IUser> {
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

    return this.post('facebook/signin');
  }

  facebookSignUp(credential: string): Observable<IUser> {
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

    return this.post('facebook/signup');
  }
}
