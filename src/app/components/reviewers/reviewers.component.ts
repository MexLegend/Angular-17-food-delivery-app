import {
  ChangeDetectionStrategy,
  Component,
  Input,
  WritableSignal,
  booleanAttribute,
  signal,
} from '@angular/core';
import { IUser } from '@models/user.interface';
import { CUSTOMERS } from '@constants/customers.constant';
import { NgOptimizedImage } from '@angular/common';
import { StarIconComponent } from 'app/icons/star-icon.component';
import { HundredSuffixesPipe } from 'app/core/pipes/hundred-suffixes.pipe';

@Component({
  selector: 'app-reviewers',
  standalone: true,
  imports: [NgOptimizedImage, StarIconComponent, HundredSuffixesPipe],
  templateUrl: './reviewers.component.html',
  styleUrl: './reviewers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewersComponent {
  @Input({ transform: booleanAttribute }) showDetailedReviews = false;

  readonly customers: WritableSignal<IUser[]> = signal([...CUSTOMERS]);
  readonly reviewsCount: WritableSignal<number> = signal(12500);
}
