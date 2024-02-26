import { Component } from '@angular/core';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { MenuCarouselComponent } from './components/menu-carousel/menu-carousel.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    SectionLayoutHeadingComponent,
    MenuSidebarComponent,
    MenuCarouselComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
