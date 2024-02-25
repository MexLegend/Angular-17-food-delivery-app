import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, WritableSignal, signal } from '@angular/core';
import { ICourier } from '@models/user.interface';
import { PhoneIconComponent } from 'app/icons/phone-icon.component';

@Component({
  selector: 'app-featured-courier',
  standalone: true,
  imports: [NgOptimizedImage, PhoneIconComponent],
  templateUrl: './featured-courier.component.html',
  styleUrl: './featured-courier.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedCourierComponent {

  @Input() customClasses?: string;

  readonly featuredCourier: WritableSignal<ICourier | null> = signal({
    image: 'assets/images/courier-icon.png',
    email: 'riachard@gmail.com',
    name: 'Richard Watson',
    phone: '3481036143',
    rating: 4,
  });
}
