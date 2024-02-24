import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagButtonComponent } from './bag-button.component';

describe('BagButtonComponent', () => {
  let component: BagButtonComponent;
  let fixture: ComponentFixture<BagButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
