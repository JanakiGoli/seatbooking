import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBookingComponent } from './individual-booking.component';

describe('IndividualBookingComponent', () => {
  let component: IndividualBookingComponent;
  let fixture: ComponentFixture<IndividualBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualBookingComponent]
    });
    fixture = TestBed.createComponent(IndividualBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
