import { Component, Input, booleanAttribute } from '@angular/core';
import { NgxStarsModule } from 'ngx-stars';

@Component({
  selector: 'app-stars',
  standalone: true,
  imports: [NgxStarsModule],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.scss',
})
export class StarsComponent {
  @Input({ transform: booleanAttribute }) readonly: boolean = false;
  @Input({ transform: booleanAttribute }) wholeStars: boolean = false;
  @Input() size: number = 4;
  @Input() color: string = '#F2C94C';
  @Input() initialStars: number = 0;
  @Input() customPadding: number = 3;
}
