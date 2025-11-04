import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategiesComponent } from './change-detection-strategies.component';

describe('ChangeDetectionStrategiesComponent', () => {
  let component: ChangeDetectionStrategiesComponent;
  let fixture: ComponentFixture<ChangeDetectionStrategiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionStrategiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectionStrategiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
