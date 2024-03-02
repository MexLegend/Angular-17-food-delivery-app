import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCategoriesMenuComponent } from './nav-categories-menu.component';

describe('NavCategoriesMenuComponent', () => {
  let component: NavCategoriesMenuComponent;
  let fixture: ComponentFixture<NavCategoriesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavCategoriesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavCategoriesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
