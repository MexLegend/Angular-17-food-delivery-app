import { NgOptimizedImage } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { CustomerReviewComponent } from '@components/customer-review/customer-review.component';
import { ReviewersComponent } from '@components/reviewers/reviewers.component';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { REVIEWS } from '@constants/reviews.constants';
import { IReviewResponse } from '@models/review.interface';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    SectionLayoutHeadingComponent,
    ReviewersComponent,
    CustomerReviewComponent,
    NgOptimizedImage,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  readonly reviews: WritableSignal<IReviewResponse[]> = signal([...REVIEWS]);
}
