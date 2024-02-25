import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLayoutHeadingComponent } from './section-layout-heading.component';

describe('SectionLayoutHeadingComponent', () => {
  let component: SectionLayoutHeadingComponent;
  let fixture: ComponentFixture<SectionLayoutHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionLayoutHeadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionLayoutHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
