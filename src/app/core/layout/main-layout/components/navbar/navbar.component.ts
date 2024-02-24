import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_LINKS } from 'app/core/constants/nav-links.constants';
import { BagIconComponent } from 'app/icons/bag-icon.component';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';
import { LogoutIconComponent } from 'app/icons/logout-icon.component';
import { SearchIconComponent } from 'app/icons/search-icon.component';
import { BagButtonComponent } from '../bag-button/bag-button.component';
import { ButtonComponent } from '@components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
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
})
export class NavbarComponent {
  readonly navlinks = [...NAV_LINKS];
}
