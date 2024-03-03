import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IUser } from '@models/user.interface';
import { UserInitialsAvatarPipe } from 'app/core/pipes/user-initials-avatar.pipe';

@Component({
  selector: 'app-user-avatar',
  standalone: true,
  imports: [NgOptimizedImage, UserInitialsAvatarPipe],
  templateUrl: './user-avatar.component.html',
  styleUrl: './user-avatar.component.scss',
})
export class UserAvatarComponent {
  @Input({ required: true }) userData!: IUser;
}
