import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CherryIconComponent } from 'app/icons/cherry-icon.component';
import { PlayIconComponent } from 'app/icons/play-icon.component';
import { HeroFeaturedDishComponent } from '../hero-featured-dish/hero-featured-dish.component';
import { HeroFeaturedCourierComponent } from '../hero-featured-courier/hero-featured-courier.component';
import { HappyCustomersComponent } from '../happy-customers/happy-customers.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    ButtonComponent,
    PlayIconComponent,
    CherryIconComponent,
    NgOptimizedImage,
    HeroFeaturedDishComponent,
    HeroFeaturedCourierComponent,
    HappyCustomersComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
