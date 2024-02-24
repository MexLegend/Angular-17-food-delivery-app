import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  WritableSignal,
  signal,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from 'app/core/constants/nav-links.constant';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';
import { LogoutIconComponent } from 'app/icons/logout-icon.component';
import { SearchIconComponent } from 'app/icons/search-icon.component';
import { BagButtonComponent } from '../bag-button/bag-button.component';
import { ButtonComponent } from '@components/button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    LogoutIconComponent,
    BagButtonComponent,
    SearchIconComponent,
    DownArrowIconComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @ViewChild('navbar', { static: false }) navbar?: ElementRef<HTMLElement>;

  readonly navlinks = [...NAV_LINKS];
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
