import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubIconComponent } from 'app/icons/github-icon.component';
import { GoogleIconComponent } from 'app/icons/google-icon.component';

@Component({
  selector: 'app-social-auth-actions',
  standalone: true,
  imports: [GoogleIconComponent, GithubIconComponent],
  templateUrl: './social-auth-actions.component.html',
  styleUrl: './social-auth-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialAuthActionsComponent {
  login() {}
}
