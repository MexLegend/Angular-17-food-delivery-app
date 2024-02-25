import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { FooterComponent } from '@components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { GetOurAppComponent } from './components/get-our-app/get-our-app.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    MenuComponent,
    ReviewsComponent,
    GetOurAppComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
