import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssArchitectureComponent } from './scss-architecture.component';

describe('ScssArchitectureComponent', () => {
  let component: ScssArchitectureComponent;
  let fixture: ComponentFixture<ScssArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScssArchitectureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScssArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
