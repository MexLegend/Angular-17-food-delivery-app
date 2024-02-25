import { Component } from '@angular/core';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SectionLayoutComponent, SectionLayoutHeadingComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
