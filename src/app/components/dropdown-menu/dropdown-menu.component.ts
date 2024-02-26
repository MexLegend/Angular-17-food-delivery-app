import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import { ClickOutsideDirective } from 'app/core/directives/click-outside.directive';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [ClickOutsideDirective, DownArrowIconComponent, NgClass],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() size: number = 448;
  @Input({ required: true }) label!: string;
  @Output() isMenuOpen = new EventEmitter<boolean>();

  readonly isOpen: WritableSignal<boolean> = signal(false);

  toofleDropDown() {
    this.isOpen.update((value) => !value);
  }
}
