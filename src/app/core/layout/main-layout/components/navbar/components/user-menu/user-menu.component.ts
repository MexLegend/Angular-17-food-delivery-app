import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from '@models/user.interface';
import { UserInitialsAvatarPipe } from 'app/core/pipes/user-initials-avatar.pipe';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [NgOptimizedImage, UserInitialsAvatarPipe],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuComponent {
  @Input({ required: true }) userData!: IUser;
}
