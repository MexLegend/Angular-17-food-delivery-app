import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { SERVICES } from '@constants/services.constant';
import { IService } from '@models/service.interface';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionLayoutComponent, SectionLayoutHeadingComponent, NgOptimizedImage],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly services: WritableSignal<IService[]> = signal([...SERVICES]);
}
