import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';
import { LocationIconComponent } from 'app/icons/location-icon.component';
import { ICategory, IMenuItem } from '@models/menu.interface';
import { CATEGORIES } from '@constants/categories.constant';
import { MENU } from '@constants/menu.constant';

@Component({
  selector: 'app-app-preview-section',
  standalone: true,
  imports: [
    DownArrowIconComponent,
    LocationIconComponent,
    NgOptimizedImage,
    NgClass,
  ],
  templateUrl: './app-preview-section.component.html',
  styleUrl: './app-preview-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppPreviewSectionComponent {
  readonly featuredCategories: WritableSignal<ICategory[]> = signal([
    ...CATEGORIES.slice(0, 3),
  ]);

  readonly featuredDishes: WritableSignal<IMenuItem[]> = signal([
    ...MENU.slice(0, 2),
  ]);
}
