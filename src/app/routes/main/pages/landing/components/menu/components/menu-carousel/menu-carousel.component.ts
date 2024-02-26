import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import { MenuItemBoxComponent } from '@components/menu-item-box/menu-item-box.component';
import { MENU } from '@constants/menu.constant';
import { IMenuItem } from '@models/menu.interface';
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-menu-carousel',
  standalone: true,
  imports: [CarouselModule, MenuItemBoxComponent],
  templateUrl: './menu-carousel.component.html',
  styleUrl: './menu-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCarouselComponent {
  @Output() carouselRef: EventEmitter<CarouselComponent> = new EventEmitter();

  readonly activeMenu: WritableSignal<IMenuItem[]> = signal([...MENU]);
  readonly customOptions: OwlOptions = {
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin: 20,
    autoWidth: true,
    nav: true,
  };
}
