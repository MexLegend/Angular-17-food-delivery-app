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
import { IAuthError } from '../../../../core/models/error.interface';
import { AutoDestroyService } from '@coreServices/utils/auto-destroy.service';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-social-auth-actions',
  standalone: true,
  imports: [GoogleIconComponent, FacebookBlueIconComponent, NgClass],
  providers: [AutoDestroyService],
  templateUrl: './social-auth-actions.component.html',
  styleUrl: './social-auth-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAuthActionsComponent implements OnInit {
  @Input() authAction: AuthActionType = 'LOGIN';

  private readonly _authService = inject(AuthService);
  private readonly _autoDestroyService = inject(AutoDestroyService);
  readonly $isLoading: Signal<boolean> = this._authService.getIsLoading();

  ngOnInit(): void {
    this._authService.initGoogleAuthConfig(this.authAction);
  }

  authenticateByGoogle() {
    this._authService
      .authenticateByGoogle()
      .pipe(takeUntil(this._autoDestroyService))
      .subscribe({
        next: (userData) => {
          this._authService.authenticateUser(userData);
        },
        error: (error: IAuthError) => {
          this._authService.setAuthError(error);
        },
      });
  }

  authenticateByFacebook() {
    this._authService.authenticateByFacebook(this.authAction).subscribe({
      next: (userData) => {
        this._authService.authenticateUser(userData);
      },
      error: (error: IAuthError) => {
        this._authService.setAuthError(error);
      },
    });
  }
}
