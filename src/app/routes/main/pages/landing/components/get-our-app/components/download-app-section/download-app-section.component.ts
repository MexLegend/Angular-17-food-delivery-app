import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { FeaturedCourierComponent } from '@components/featured-courier/featured-courier.component';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';

@Component({
  selector: 'app-download-app-section',
  standalone: true,
  imports: [
    SectionLayoutHeadingComponent,
    ButtonComponent,
    FeaturedCourierComponent,
  ],
  templateUrl: './download-app-section.component.html',
  styleUrl: './download-app-section.component.scss',
})
export class DownloadAppSectionComponent {}
