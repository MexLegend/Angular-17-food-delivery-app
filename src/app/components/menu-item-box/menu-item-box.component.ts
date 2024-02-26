import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IMenuItem } from '@models/menu.interface';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-menu-item-box',
  standalone: true,
  imports: [NgOptimizedImage, CarouselModule, DownArrowIconComponent],
  templateUrl: './menu-item-box.component.html',
  styleUrl: './menu-item-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemBoxComponent {
  @Input({ required: true }) menuItem!: IMenuItem;
}
