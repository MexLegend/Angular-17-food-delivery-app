import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Signal,
  ViewChild,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_MENU } from '@constants/nav-menu.constant';
import { LogoutIconComponent } from 'app/icons/logout-icon.component';
import { SearchIconComponent } from 'app/icons/search-icon.component';
import { BagButtonComponent } from '../bag-button/bag-button.component';
import { ButtonComponent } from '@components/button/button.component';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { LogoComponent } from '@components/logo/logo.component';
import { DropdownMenuComponent } from '@components/dropdown-menu/dropdown-menu.component';
import { CATEGORIES } from '@constants/categories.constant';
import { NavMenuItemComponent } from './components/nav-menu-item/nav-menu-item.component';
import { INavMenuItem } from '@models/nav-menu-item.interface';
import { CheckIconComponent } from 'app/icons/check-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    ButtonComponent,
    DropdownMenuComponent,
    NavMenuItemComponent,
    LogoutIconComponent,
    BagButtonComponent,
    SearchIconComponent,
    CheckIconComponent,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('navbar', { static: false }) navbar?: ElementRef<HTMLElement>;

  readonly navMenu = [...NAV_MENU];
  readonly categoriesMenu: Signal<INavMenuItem[]> = computed(() => {
    const categories = [...CATEGORIES];
    return categories.map((category) => ({
      label: category.name,
      link: `menu-`,
      icon: category.icon,
    }));
  });
  readonly isScrolling: WritableSignal<boolean> = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    const navbarElement = this.navbar?.nativeElement;
    if (!navbarElement) return;

    if (window.scrollY > navbarElement.clientHeight) {
      this.isScrolling.set(true);
    } else {
      this.isScrolling.set(false);
    }
  }
}
