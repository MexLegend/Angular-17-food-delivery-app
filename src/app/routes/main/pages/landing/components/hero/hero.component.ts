import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '@components/button/button.component';
import { CherryIconComponent } from 'app/icons/cherry-icon.component';
import { PlayIconComponent } from 'app/icons/play-icon.component';
import { HeroFeaturedDishComponent } from './components/hero-featured-dish/hero-featured-dish.component';
import { HeroFeaturedCourierComponent } from './components/hero-featured-courier/hero-featured-courier.component';
import { ReviewersComponent } from '@components/reviewers/reviewers.component';
import { SectionLayoutComponent } from '@components/section-layout/section-layout.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    SectionLayoutComponent,
    ButtonComponent,
    PlayIconComponent,
    CherryIconComponent,
    NgOptimizedImage,
    HeroFeaturedDishComponent,
    HeroFeaturedCourierComponent,
    ReviewersComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
