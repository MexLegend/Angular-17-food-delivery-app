import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-layout',
  standalone: true,
  imports: [],
  templateUrl: './section-layout.component.html',
  styleUrl: './section-layout.component.scss',
})
export class SectionLayoutComponent {
  @Input() customClasses?: string;
}
