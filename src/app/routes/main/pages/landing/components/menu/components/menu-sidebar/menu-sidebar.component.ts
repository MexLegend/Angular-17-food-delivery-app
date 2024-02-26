import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { CategoryBoxComponent } from '@components/category-box/category-box.component';
import { CATEGORIES } from '@constants/categories.constant';
import { ICategory } from '@models/menu.interface';

@Component({
  selector: 'app-menu-sidebar',
  standalone: true,
  imports: [CategoryBoxComponent],
  templateUrl: './menu-sidebar.component.html',
  styleUrl: './menu-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSidebarComponent {
  readonly categories: WritableSignal<ICategory[]> = signal([...CATEGORIES]);
}
