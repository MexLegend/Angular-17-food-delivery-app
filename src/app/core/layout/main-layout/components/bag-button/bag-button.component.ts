import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BagIconComponent } from 'app/icons/bag-icon.component';

@Component({
  selector: 'app-bag-button',
  standalone: true,
  imports: [BagIconComponent],
  templateUrl: './bag-button.component.html',
  styleUrl: './bag-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagButtonComponent {}
