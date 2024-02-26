import { NgClass, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  booleanAttribute,
} from '@angular/core';
import { ICategory } from '@models/menu.interface';

@Component({
  selector: 'app-category-box',
  standalone: true,
  imports: [NgClass, NgOptimizedImage],
  templateUrl: './category-box.component.html',
  styleUrl: './category-box.component.scss',
})
export class CategoryBoxComponent {
  @Input({ required: true }) category!: ICategory;
  @Input({ transform: booleanAttribute }) isActive?: boolean;
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();
}
