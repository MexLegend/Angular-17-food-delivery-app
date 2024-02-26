import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { CustomerReviewComponent } from '@components/customer-review/customer-review.component';
import { ReviewersComponent } from '@components/reviewers/reviewers.component';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';
import { REVIEWS } from '@constants/reviews.constants';
import { IReviewResponse } from '@models/review.interface';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    SectionLayoutHeadingComponent,
    ReviewersComponent,
    CustomerReviewComponent,
    NgOptimizedImage,
    CarouselModule,
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsComponent {
  readonly reviews: WritableSignal<IReviewResponse[]> = signal([...REVIEWS]);

  readonly customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navSpeed: 700,
    items: 1,
  };
}
