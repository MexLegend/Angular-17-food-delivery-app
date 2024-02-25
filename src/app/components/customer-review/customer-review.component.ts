import { Component, Input } from '@angular/core';
import { IReviewResponse } from '@models/review.interface';
import { NgOptimizedImage } from '@angular/common';
import { StarsComponent } from '@components/stars/stars.component';

@Component({
  selector: 'app-customer-review',
  standalone: true,
  imports: [NgOptimizedImage, StarsComponent],
  templateUrl: './customer-review.component.html',
  styleUrl: './customer-review.component.scss',
})
export class CustomerReviewComponent {
  @Input({ required: true }) review!: IReviewResponse;
}
