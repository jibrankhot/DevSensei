import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeAuthComponent } from './node-auth.component';

describe('NodeAuthComponent', () => {
  let component: NodeAuthComponent;
  let fixture: ComponentFixture<NodeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
