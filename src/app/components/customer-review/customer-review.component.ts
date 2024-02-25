import { Component, WritableSignal, signal } from '@angular/core';
import { IReviewResponse } from '@models/review.interface';
import { REVIEWS } from '@constants/reviews.constants';

@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [],
  templateUrl: './customer-review.component.html',
  styleUrl: './customer-review.component.scss',
})
export class CustomerReviewComponent {
  readonly reviews: WritableSignal<IReviewResponse[]> = signal([...REVIEWS]);
}
