import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '@models/user.interface';
import { UserInitialsAvatarPipe } from 'app/core/pipes/user-initials-avatar.pipe';
import { MenuModule } from 'primeng/menu';
import { MenuItem, SharedModule } from 'primeng/api';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [NgOptimizedImage, UserInitialsAvatarPipe, MenuModule, SharedModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  @Input({ required: true }) userData!: IUser;
  readonly userMenu: MenuItem[] | undefined = [
    {
      label: 'Hey',
    },
    {
      label: 'You',
    },
    {
      label: 'nAEIN',
    },
  ];
}
