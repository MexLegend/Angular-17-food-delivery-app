import {
  Injectable,
  NgZone,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Observable, Subject, delay, finalize, of } from 'rxjs';
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
import { ActivatedRoute, Router } from '@angular/router';
import { BaseApiService } from '@models/base-api-service';
import { IAuthError } from '@models/error.interface';
import { AUTH_REDIRECT } from '@constants/auth-redirect.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseApiService {
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _ngZone = inject(NgZone);

  private readonly _storageService = inject(LocalStorageService);
  private readonly _userService = inject(UserService);

  private readonly _$isLoggedIn: WritableSignal<boolean> = signal(false);
  private readonly _$isLoading: WritableSignal<boolean> = signal(false);
  private readonly _$authError: WritableSignal<IAuthError | null> =
    signal(null);
  private readonly _googleAuthSubject: Subject<IUser> = new Subject();
  private readonly _$googleButtonWrapper: WritableSignal<HTMLButtonElement | null> =
    signal(null);

  constructor() {
    super('auth');
  }

  loadUserFromStorage() {
    const userFromStorage = this._storageService.getItem<IUser>(
      KEY_STORAGE.DATA_USER
    );

    if (userFromStorage) {
      this._userService.setUserData(userFromStorage);
      this._$isLoggedIn.set(true);
    }

    return userFromStorage;
  }

  isLoggedIn(): boolean {
    return this._$isLoggedIn();
  }

  getIsLoading(): Signal<boolean> {
    return this._$isLoading.asReadonly();
  }

  stopIsLoading(): void {
    return this._$isLoading.set(false);
  }

  getAuthError(): Signal<IAuthError | null> {
    return this._$authError.asReadonly();
  }

  setAuthError(authError: IAuthError): void {
    return this._$authError.set(authError);
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

  signOut(): Observable<void> {
    return new Observable((observer) => {
      // Logout from Facebook if a token exists
      if (FB.getAccessToken() != null) {
        FB.logout();
      }
      // Logout from Google
      google.accounts.id.disableAutoSelect();

      this._$isLoggedIn.set(false);
      this._router.navigateByUrl('/auth').then(() => {
        this._storageService.removeItem(KEY_STORAGE.DATA_USER);
        this._userService.setUserData(null);
      });

      observer.next();
      observer.complete();
    });
  }

  authenticateUser(userData: IUser): void {
    const redirectUrl =
      this._activatedRoute.snapshot.queryParams[AUTH_REDIRECT];

    this._userService.setUserData(userData);
    this._storageService.setItem(KEY_STORAGE.DATA_USER, userData);
    this._$isLoggedIn.set(true);
    this._router.navigateByUrl(redirectUrl || '/');
  }

  initGoogleAuthConfig(authAction: AuthActionType): void {
    const googleAccounts: accounts = google.accounts;

    this._initializeGoogleSignIn(googleAccounts, authAction);
    this._renderGoogleSignInButton(googleAccounts);
  }

  private _initializeGoogleSignIn(
    googleAccounts: accounts,
    authAction: AuthActionType
  ): void {
    googleAccounts.id.initialize({
      client_id: environment.GOOGLE_CLIENT_ID,
      callback: ({ credential: token }) => {
        this._ngZone.run(() => {
          let authObservable: Observable<IUser>;

          if (authAction === 'LOGIN') {
            authObservable = this._googleSignIn(token);
          } else {
            authObservable = this._googleSignUp(token);
          }

          authObservable.subscribe({
            next: (user) => {
              this._googleAuthSubject.next(user);
            },
            error: (error) => this._googleAuthSubject.error(error),
          });
        });
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

  authenticateByGoogle(): Observable<IUser> {
    this._$googleButtonWrapper()?.click();
    return this._googleAuthSubject.asObservable();
  }

  private _googleSignIn(token: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Google Login: ', token);

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

    return this.post('google/signin', { token });
  }

  private _googleSignUp(token: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Google Register: ', token);

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
          this._ngZone.run(() => {
            const token = result.authResponse.accessToken;
            let authObservable: Observable<IUser>;

            if (authAction === 'LOGIN') {
              authObservable = this._facebookSignIn(token);
            } else {
              authObservable = this._facebookSignUp(token);
            }

            authObservable.subscribe({
              next: (user) => {
                observer.next(user);
                observer.complete();
              },
              error: (error) => observer.error(error),
            });
          });
        },
        { scope: 'email' }
      );
    });
  }

  private _facebookSignIn(token: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Facebook Login: ', token);

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

  private _facebookSignUp(token: string): Observable<IUser> {
    this._$isLoading.set(true);
    console.log('Facebook Register: ', token);

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
