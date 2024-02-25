import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerReviewComponent } from '@components/customer-review/customer-review.component';
import { ReviewersComponent } from '@components/reviewers/reviewers.component';
import { SectionLayoutHeadingComponent } from '@components/section-layout-heading/section-layout-heading.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';

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
export class ReviewsComponent {}
