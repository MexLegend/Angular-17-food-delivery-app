import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  computed,
} from '@angular/core';
import { NavMenuTriggerComponent } from '../nav-menu-trigger/nav-menu-trigger.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem, SharedModule } from 'primeng/api';
import { NavMenuItemComponent } from '../nav-menu-item/nav-menu-item.component';
import { NgOptimizedImage } from '@angular/common';
import { CATEGORIES } from '@constants/categories.constant';

@Component({
  selector: 'app-nav-categories-menu',
  standalone: true,
  imports: [
    NavMenuTriggerComponent,
    NavMenuItemComponent,
    NgOptimizedImage,
    MenuModule,
    SharedModule,
  ],
  templateUrl: './nav-categories-menu.component.html',
  styleUrl: './nav-categories-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavCategoriesMenuComponent {
  readonly categoriesMenu: Signal<MenuItem[]> = computed(() => {
    const categories = [...CATEGORIES];
    return categories.map((category) => ({
      label: category.name,
      routerLink: `menu-`,
      icon: category.icon,
    })) as MenuItem[];
  });
}
