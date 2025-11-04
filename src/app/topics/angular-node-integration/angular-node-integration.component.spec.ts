import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNodeIntegrationComponent } from './angular-node-integration.component';

describe('AngularNodeIntegrationComponent', () => {
  let component: AngularNodeIntegrationComponent;
  let fixture: ComponentFixture<AngularNodeIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularNodeIntegrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularNodeIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
