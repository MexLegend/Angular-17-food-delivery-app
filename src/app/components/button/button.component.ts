import { Component, Input } from '@angular/core';

type ButtonType = 'button' | 'menu' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() buttonType: ButtonType = "button";
  @Input() customClasses?: string;
}
