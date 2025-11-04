import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildViewcontainerrefComponent } from './viewchild-viewcontainerref.component';

describe('ViewchildViewcontainerrefComponent', () => {
  let component: ViewchildViewcontainerrefComponent;
  let fixture: ComponentFixture<ViewchildViewcontainerrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildViewcontainerrefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchildViewcontainerrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
