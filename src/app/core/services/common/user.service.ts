import {
  Injectable,
  Signal,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { KEY_STORAGE } from '@models/storage.enum';
import { IUser } from '@models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _storageService = inject(LocalStorageService);
  private readonly _$user: WritableSignal<IUser | null> = signal(null);

  setUserData(userData: IUser | null): void {
    this._$user.set(userData);
  }

  getUserData(): Signal<IUser | null> {
    return this._$user.asReadonly();
  }

  updateStorage(userData: IUser): void {
    this._storageService.setItem(KEY_STORAGE.DATA_USER, userData);
  }
}
