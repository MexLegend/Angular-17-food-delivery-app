import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DownArrowIconComponent } from 'app/icons/down-arrow-icon.component';

@Component({
  selector: 'app-nav-menu-trigger',
  standalone: true,
  imports: [DownArrowIconComponent, NgClass],
  templateUrl: './nav-menu-trigger.component.html',
  styleUrl: './nav-menu-trigger.component.scss',
})
export class NavMenuTriggerComponent {
  @Input({ required: true }) label!: string;
  @Output() clickEvent: EventEmitter<MouseEvent> = new EventEmitter();
}
