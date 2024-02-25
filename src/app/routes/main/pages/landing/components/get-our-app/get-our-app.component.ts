import { Component } from '@angular/core';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { DownloadAppSectionComponent } from './components/download-app-section/download-app-section.component';
import { AppPreviewSectionComponent } from './components/app-preview-section/app-preview-section.component';

@Component({
  selector: 'app-get-our-app',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    DownloadAppSectionComponent,
    AppPreviewSectionComponent,
  ],
  templateUrl: './get-our-app.component.html',
  styleUrl: './get-our-app.component.scss',
})
export class GetOurAppComponent {}
