import { Component, Input } from '@angular/core';
import { IAuthError } from '@models/error.interface';
import { ErrorIconComponent } from 'app/icons/error-icon.component';

@Component({
  selector: 'app-auth-form-error',
  standalone: true,
  imports: [ErrorIconComponent],
  templateUrl: './auth-form-error.component.html',
  styleUrl: './auth-form-error.component.scss',
})
export class AuthFormErrorComponent {
  @Input({ required: true }) error!: IAuthError;
}
