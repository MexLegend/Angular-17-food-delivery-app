import { Component, Input } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';
import { SocialAuthActionsComponent } from '../social-auth-actions/social-auth-actions.component';

@Component({
  selector: 'app-auth-form-container',
  standalone: true,
  imports: [LogoComponent, SocialAuthActionsComponent],
  templateUrl: './auth-form-container.component.html',
  styleUrl: './auth-form-container.component.scss'
})
export class AuthFormContainerComponent {
  @Input({required: true}) title!: string;

}
