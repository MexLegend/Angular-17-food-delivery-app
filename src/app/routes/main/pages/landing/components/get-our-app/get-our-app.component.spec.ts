import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOurAppComponent } from './get-our-app.component';

describe('GetOurAppComponent', () => {
  let component: GetOurAppComponent;
  let fixture: ComponentFixture<GetOurAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOurAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetOurAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
