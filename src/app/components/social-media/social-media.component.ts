import { Component } from '@angular/core';
import { FacebookIconComponent } from 'app/icons/facebook-icon.component';
import { InstagramIconComponent } from 'app/icons/instagram-icon.component';
import { TwitterIconComponent } from 'app/icons/twitter-icon.component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    InstagramIconComponent,
    FacebookIconComponent,
    TwitterIconComponent,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {}
