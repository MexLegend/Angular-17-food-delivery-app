import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-layout-heading',
  standalone: true,
  imports: [],
  templateUrl: './section-layout-heading.component.html',
  styleUrl: './section-layout-heading.component.scss',
})
export class SectionLayoutHeadingComponent {
  @Input({ required: true }) title!: string;
  @Input() subtitle?: string;
}
