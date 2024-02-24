import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { PlayIconComponent } from 'app/icons/play-icon.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonComponent, PlayIconComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
