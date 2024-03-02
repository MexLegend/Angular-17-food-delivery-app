import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavMenuItem } from '@models/nav-menu-item.interface';

@Component({
  selector: 'app-nav-menu-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-menu-item.component.html',
  styleUrl: './nav-menu-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuItemComponent {
  @Input({ required: true }) navMenuItem!: INavMenuItem;
  @Input() customClasses?: string;
}
