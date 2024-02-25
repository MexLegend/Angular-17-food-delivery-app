import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeaturedCourierComponent } from './hero-featured-courier.component';

describe('HeroFeaturedCourierComponent', () => {
  let component: HeroFeaturedCourierComponent;
  let fixture: ComponentFixture<HeroFeaturedCourierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeaturedCourierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFeaturedCourierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
