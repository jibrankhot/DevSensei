import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E2eTestingComponent } from './e2e-testing.component';

describe('E2eTestingComponent', () => {
  let component: E2eTestingComponent;
  let fixture: ComponentFixture<E2eTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [E2eTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(E2eTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
