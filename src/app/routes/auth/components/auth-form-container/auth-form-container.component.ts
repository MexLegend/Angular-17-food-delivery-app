import { Component, Input, Signal, inject } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';
import { SocialAuthActionsComponent } from '../social-auth-actions/social-auth-actions.component';
import { AuthService } from '@coreServices/common/auth.service';
import { IAuthError } from '@models/error.interface';
import { AuthFormErrorComponent } from '../auth-form-error/auth-form-error.component';

@Component({
  selector: 'app-auth-form-container',
  standalone: true,
  imports: [LogoComponent, AuthFormErrorComponent, SocialAuthActionsComponent],
  templateUrl: './auth-form-container.component.html',
  styleUrl: './auth-form-container.component.scss',
})
export class AuthFormContainerComponent {
  @Input({ required: true }) title!: string;

  private readonly _authService = inject(AuthService);
  readonly $authError: Signal<IAuthError | null> =
    this._authService.getAuthError();
}
