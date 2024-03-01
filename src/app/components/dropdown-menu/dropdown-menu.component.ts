import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  booleanAttribute,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from 'app/core/directives/click-outside.directive';
import { PositionDropdownDirective } from 'app/core/directives/position-dropdown.directive';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [
    ClickOutsideDirective,
    DownArrowIconComponent,
    NgClass,
    PositionDropdownDirective,
  ],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() size: number = 448;
  @Input() label?: string;
  @Input({ transform: booleanAttribute }) hasCustomTrigger?: boolean;

  readonly isOpen: WritableSignal<boolean> = signal(false);

  toogleDropDown() {
    this.isOpen.update((value) => !value);
  }
}
