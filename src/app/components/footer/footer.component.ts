import { Component, WritableSignal, signal } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { IFooterSection } from '../../core/models/footer-section.interface';
import { FOOTER_SECTIONS } from '@constants/footer-sections.constant';
import { RouterLink } from '@angular/router';
import { SendIconComponent } from 'app/icons/send-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    LogoComponent,
    SocialMediaComponent,
    RouterLink,
    SendIconComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly footerSections: WritableSignal<IFooterSection[]> = signal([
    ...FOOTER_SECTIONS,
  ]);
}
