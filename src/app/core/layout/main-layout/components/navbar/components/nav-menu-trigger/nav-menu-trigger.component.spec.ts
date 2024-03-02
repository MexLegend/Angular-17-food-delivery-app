import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuTriggerComponent } from './nav-menu-trigger.component';

describe('NavMenuTriggerComponent', () => {
  let component: NavMenuTriggerComponent;
  let fixture: ComponentFixture<NavMenuTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
