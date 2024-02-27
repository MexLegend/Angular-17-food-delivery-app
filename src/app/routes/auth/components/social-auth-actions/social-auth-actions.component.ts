import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { AuthService } from '@coreServices/common/auth.service';
import { GithubIconComponent } from 'app/icons/github-icon.component';
import { GoogleIconComponent } from 'app/icons/google-icon.component';

type AuthActionType = 'LOGIN' | 'REGISTER';

@Component({
  selector: 'app-social-auth-actions',
  standalone: true,
  imports: [GoogleIconComponent, GithubIconComponent],
  templateUrl: './social-auth-actions.component.html',
  styleUrl: './social-auth-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAuthActionsComponent {
  @Input() authAction: AuthActionType = 'LOGIN';

  private readonly _authService = inject(AuthService);

  googleAuthAction() {
    this.authAction === 'LOGIN'
      ? this._authService.googleLogin()
      : this._authService.googleRegister();
  }

  githubAuthAction() {
    this.authAction === 'LOGIN'
      ? this._authService.githubLogin()
      : this._authService.githubRegister();
  }
}
