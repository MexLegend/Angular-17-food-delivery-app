import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Signal,
  inject,
} from '@angular/core';
import { AuthService } from '@coreServices/common/auth.service';
import { AuthActionType } from '@models/auth.interface';
import { FacebookBlueIconComponent } from 'app/icons/facebook-blue-icon.component';
import { GoogleIconComponent } from 'app/icons/google-icon.component';

@Component({
  selector: 'app-social-auth-actions',
  standalone: true,
  imports: [GoogleIconComponent, FacebookBlueIconComponent, NgClass],
  templateUrl: './social-auth-actions.component.html',
  styleUrl: './social-auth-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAuthActionsComponent implements OnInit {
  @Input() authAction: AuthActionType = 'LOGIN';

  private readonly _authService = inject(AuthService);
  readonly $isLoading: Signal<boolean> = this._authService.getIsLoading();

  ngOnInit(): void {
    this._authService.initGoogleAuthConfig(this.authAction);
  }

  openGoogleAuthDialog() {
    this._authService.openGoogleAuthDialog();
  }

  openFacebookAuthDialog() {
    this._authService.openFacebookAuthDialog(this.authAction);
  }
}
