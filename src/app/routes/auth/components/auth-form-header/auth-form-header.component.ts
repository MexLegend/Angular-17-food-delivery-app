import { Component, Input } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';

@Component({
  selector: 'app-auth-form-header',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './auth-form-header.component.html',
  styleUrl: './auth-form-header.component.scss',
})
export class AuthFormHeaderComponent {
  @Input({ required: true }) title!: string;
}
