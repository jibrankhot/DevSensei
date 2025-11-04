import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxGridComponent } from './flexbox-grid.component';

describe('FlexboxGridComponent', () => {
  let component: FlexboxGridComponent;
  let fixture: ComponentFixture<FlexboxGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexboxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
