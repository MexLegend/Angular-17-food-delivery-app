import {
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { Observable, delay, finalize, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import {
  AuthConfig,
  OAuthService,
  OAuthSuccessEvent,
} from 'angular-oauth2-oidc';
import { UserService } from './user.service';
import { IUser } from '@models/user.interface';
import { KEY_STORAGE } from '@models/storage.enum';
import { ILoginData } from '@models/auth.interface';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _oAuthService = inject(OAuthService);
  private readonly _storageService = inject(LocalStorageService);
  private readonly _userService = inject(UserService);
  private readonly _$isLoading: WritableSignal<boolean> = signal(false);

  getIsLoading(): Signal<boolean> {
    return this._$isLoading.asReadonly();
  }

  initGoogleLogin() {
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: environment.GOOGLE_CLIENT_ID,
      redirectUri: window.location.origin + '/',
      scope: 'openid profile email',
    };

    this._oAuthService.configure(config);
    this._oAuthService.setupAutomaticSilentRefresh();
    this._oAuthService.loadDiscoveryDocumentAndTryLogin();

    // Suscribirse al evento de token recibido
    this._oAuthService.events.subscribe((event) => {
      console.log(event);

      if (event instanceof OAuthSuccessEvent) {
        // Se ejecuta cuando el inicio de sesión es exitoso
        // Aquí puedes ejecutar las acciones que deseas después del inicio de sesión exitoso

        // Obtener información del usuario (puede variar dependiendo de tu implementación)
        const userInfo = this._oAuthService.getIdentityClaims() as IUser;

        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Configurar la información del usuario en el servicio UserService
        // this._userService.setUserData(userInfo);

        // Guardar la información del usuario en el almacenamiento local
        // this._storageService.setItem(KEY_STORAGE.DATA_USER, userInfo);
      }
    });
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

  googleLogin(): void {
    this._$isLoading.set(true);

    this._oAuthService.initLoginFlow();
  }

  googleRegister(): void {
    console.log('Google Register');
  }

  githubLogin(): void {
    console.log('Github Login');
  }

  githubRegister(): void {
    console.log('Github Register');
  }

  logout(): Observable<void> {
    return new Observable((observer) => {
      this._oAuthService.logOut();
      this._storageService.removeItem(KEY_STORAGE.DATA_USER);
      this._userService.setUserData(null);
      observer.next();
      observer.complete();
    });
  }
}
