import { Component, Input, WritableSignal, signal } from '@angular/core';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { MenuCarouselComponent } from './components/menu-carousel/menu-carousel.component';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';
import { CarouselComponent } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    SectionLayoutHeadingComponent,
    MenuSidebarComponent,
    MenuCarouselComponent,
    DownArrowIconComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  readonly menuCarouselRef: WritableSignal<CarouselComponent | null> =
    signal(null);
}
