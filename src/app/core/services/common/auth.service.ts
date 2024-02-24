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
import { ILoginData } from '@models/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _storageService = inject(LocalStorageService);
  private readonly _userService = inject(UserService);

  private readonly _$isLoading: WritableSignal<boolean> = signal(false);

  getIsLoading(): Signal<boolean> {
    return this._$isLoading.asReadonly();
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

  logout(): Observable<void> {
    return new Observable((observer) => {
      this._storageService.removeItem(KEY_STORAGE.DATA_USER);
      this._userService.setUserData(null);
      observer.next();
      observer.complete();
    });
  }
}
