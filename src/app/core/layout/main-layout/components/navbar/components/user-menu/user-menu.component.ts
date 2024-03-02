import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  computed,
} from '@angular/core';
import { IUser } from '@models/user.interface';
import { UserInitialsAvatarPipe } from 'app/core/pipes/user-initials-avatar.pipe';
import { USER_MENU } from '@constants/user-menu.constant';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { MenuItem, SharedModule } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent } from '@icons/ng-icon/ng-icon.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    NgOptimizedImage,
    UserInitialsAvatarPipe,
    NgIconComponent,
    MenuModule,
    SharedModule,
    DividerModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  @Input({ required: true }) userData!: IUser;

  readonly userMenu: Signal<MenuItem[]> = computed(() => {
    const userMenuList = [...USER_MENU];
    const userMenuFormated = userMenuList.map((menuItem) => ({
      label: menuItem.label,
      routerLink: menuItem.link,
      customIcon: menuItem.icon,
      escape: false,
      separator: menuItem.separator,
    })) as MenuItem[];

    userMenuFormated.push(
      ...[
        {
          label: 'Switch Accounts',
          customIcon: "switch-account",
          command: () => this.test(),
        },
        {
          label: 'Sign Out',
          customIcon: "sign-out",
          command: () => this.test(),
        },
      ]
    );
    
    return userMenuFormated;
  });

  test() {
    console.log('Du has click me');
  }
}
