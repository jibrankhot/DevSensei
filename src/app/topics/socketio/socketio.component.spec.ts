import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketioComponent } from './socketio.component';

describe('SocketioComponent', () => {
  let component: SocketioComponent;
  let fixture: ComponentFixture<SocketioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocketioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocketioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
