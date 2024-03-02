import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuSubmenuComponent } from './nav-menu-submenu.component';

describe('NavMenuSubmenuComponent', () => {
  let component: NavMenuSubmenuComponent;
  let fixture: ComponentFixture<NavMenuSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuSubmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavMenuSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
