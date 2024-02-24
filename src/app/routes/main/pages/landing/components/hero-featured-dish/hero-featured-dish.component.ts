import { NgOptimizedImage } from '@angular/common';
import { Component, Input, WritableSignal, signal } from '@angular/core';
import { StarsComponent } from '@components/stars/stars.component';
import { IMenuItem } from '@models/menu.interfaz';

@Component({
  selector: 'app-hero-featured-dish',
  standalone: true,
  imports: [NgOptimizedImage, StarsComponent],
  templateUrl: './hero-featured-dish.component.html',
  styleUrl: './hero-featured-dish.component.scss',
})
export class HeroFeaturedDishComponent {
  readonly featuredDish: WritableSignal<IMenuItem | null> = signal({
    image: 'assets/images/italian-pizza.png',
    category: {
      icon: 'assets/images/pizza-icon.png',
      name: 'Pizza',
    },
    description: '',
    name: 'Italian Pizza',
    price: 7.49,
    rating: 4,
  });
}
