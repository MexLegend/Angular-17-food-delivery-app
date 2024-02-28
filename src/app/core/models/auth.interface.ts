import { FormControl } from '@angular/forms';

export type AuthActionType = 'LOGIN' | 'REGISTER';

export interface ILoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterForm {
  name: FormControl<string>;
  email: FormControl<string>;
  phone?: FormControl<string>;
  password: FormControl<string>;
  repeatPassword: FormControl<string>;
}

export interface IRegisterData {
  name: string;
  email: string;
  phone?: string;
  password: string;
  repeatPassword: string;
}

export interface IFacebookDialogResponse {
  authResponse: IFacebookAuthResponse;
  status: string;
}

export interface IFacebookAuthResponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  graphDomain: string;
  signedRequest: string;
  userID: string;
}
