import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  computed,
} from '@angular/core';
import { NavMenuTriggerComponent } from '../nav-menu-trigger/nav-menu-trigger.component';
import { MenuModule } from 'primeng/menu';
import { NavMenuItemComponent } from '../nav-menu-item/nav-menu-item.component';
import { CheckIconComponent } from '@icons/check-icon.component';
import { INavMenuItem } from '@models/nav-menu-item.interface';
import { SharedModule, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu-submenu',
  standalone: true,
  imports: [
    NavMenuTriggerComponent,
    NavMenuItemComponent,
    CheckIconComponent,
    MenuModule,
    SharedModule,
  ],
  templateUrl: './nav-menu-submenu.component.html',
  styleUrl: './nav-menu-submenu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuSubmenuComponent {
  @Input({ required: true }) navMenuItem!: INavMenuItem;
  readonly navMenuList: Signal<MenuItem[]> = computed(() => {
    return this.navMenuItem.menu as MenuItem[];
  });
}
