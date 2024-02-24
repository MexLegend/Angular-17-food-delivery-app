import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeaturedDishComponent } from './hero-featured-dish.component';

describe('HeroFeaturedDishComponent', () => {
  let component: HeroFeaturedDishComponent;
  let fixture: ComponentFixture<HeroFeaturedDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeaturedDishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFeaturedDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
