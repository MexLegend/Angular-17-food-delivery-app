import { NgOptimizedImage } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { ICourier } from '@models/user.interface';
import { PhoneIconComponent } from 'app/icons/phone-icon.component';

@Component({
  selector: 'app-hero-featured-courier',
  standalone: true,
  imports: [NgOptimizedImage, PhoneIconComponent],
  templateUrl: './hero-featured-courier.component.html',
  styleUrl: './hero-featured-courier.component.scss',
})
export class HeroFeaturedCourierComponent {
  readonly featuredCourier: WritableSignal<ICourier | null> = signal({
    image: 'assets/images/courier-icon.png',
    email: 'riachard@gmail.com',
    name: 'Richard Watson',
    phone: '3481036143',
    rating: 4,
  });
}
