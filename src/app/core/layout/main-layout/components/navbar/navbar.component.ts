import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  Signal,
  ViewChild,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_MENU } from '@constants/nav-menu.constant';
import { LogoutIconComponent } from 'app/icons/logout-icon.component';
import { SearchIconComponent } from 'app/icons/search-icon.component';
import { BagButtonComponent } from '../bag-button/bag-button.component';
import { ButtonComponent } from '@components/button/button.component';
import { NgClass } from '@angular/common';
import { LogoComponent } from '@components/logo/logo.component';
import { UserService } from '@coreServices/common/user.service';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { IUser } from '@models/user.interface';
import { NavCategoriesMenuComponent } from './components/nav-categories-menu/nav-categories-menu.component';
import { NavMenuSubmenuComponent } from './components/nav-menu-submenu/nav-menu-submenu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    ButtonComponent,
    NavMenuSubmenuComponent,
    NavCategoriesMenuComponent,
    UserMenuComponent,
    LogoutIconComponent,
    BagButtonComponent,
    SearchIconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('navbar', { static: false }) navbar?: ElementRef<HTMLElement>;

  private readonly _userService = inject(UserService);
  readonly userData: Signal<IUser | null> = this._userService.getUserData();

  readonly navMenu = [...NAV_MENU];

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
