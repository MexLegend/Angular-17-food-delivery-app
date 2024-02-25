import { Component } from '@angular/core';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';

@Component({
  selector: 'app-get-our-app',
  standalone: true,
  imports: [SectionLayoutComponent, SectionLayoutHeadingComponent],
  templateUrl: './get-our-app.component.html',
  styleUrl: './get-our-app.component.scss',
})
export class GetOurAppComponent {}
