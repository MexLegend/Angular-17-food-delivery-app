import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  computed,
} from '@angular/core';
import { IUser } from '@models/user.interface';
import { USER_MENU } from '@constants/user-menu.constant';
import { MenuModule } from 'primeng/menu';
import { DividerModule } from 'primeng/divider';
import { MenuItem, MessageService, SharedModule } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent } from '@icons/ng-icon/ng-icon.component';
import { inject } from '@angular/core';
import { AuthService } from '@coreServices/common/auth.service';
import { UserAvatarComponent } from '@components/user-avatar/user-avatar.component';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    UserAvatarComponent,
    NgIconComponent,
    MenuModule,
    SharedModule,
    DividerModule,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [MessageService],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  @Input({ required: true }) userData!: IUser;

  private readonly _authService = inject(AuthService);
  private readonly _messageService = inject(MessageService);

  readonly userMenu: Signal<MenuItem[]> = computed(() => {
    const userMenuList = [...USER_MENU];
    const userMenuFormated = userMenuList.map((menuItem) => ({
      label: menuItem.label,
      routerLink: menuItem.link,
      customIcon: menuItem.icon,
      escape: false,
      separator: menuItem.separator,
    })) as MenuItem[];

    // Add user profile option
    userMenuFormated.unshift(
      ...[
        {
          label: 'userProfile',
        },
        {
          separator: true,
        },
      ]
    );

    // Add Switch accounts and sign out options
    userMenuFormated.push(
      ...[
        {
          label: 'Switch Accounts',
          customIcon: 'switch-account',
          command: () => this.switchAccounts(),
        },
        {
          label: 'Sign Out',
          customIcon: 'sign-out',
          command: () => this.signOut(),
        },
      ]
    );

    return userMenuFormated;
  });

  switchAccounts() {
    console.log('Du has click me');
  }

  signOut() {
    this._authService.signOut().subscribe({
      error: () =>
        this._messageService.add({
          severity: 'error',
          summary: 'Logout failed',
          detail:
            'An error occurred while attempting to log you out. Please try again later.',
        }),
    });
  }
}
