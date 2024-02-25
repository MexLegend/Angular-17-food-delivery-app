import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPreviewSectionComponent } from './app-preview-section.component';

describe('AppPreviewSectionComponent', () => {
  let component: AppPreviewSectionComponent;
  let fixture: ComponentFixture<AppPreviewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPreviewSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
