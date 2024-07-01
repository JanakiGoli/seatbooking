import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandalonecompComponent } from './standalonecomp.component';

describe('StandalonecompComponent', () => {
  let component: StandalonecompComponent;
  let fixture: ComponentFixture<StandalonecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StandalonecompComponent]
    });
    fixture = TestBed.createComponent(StandalonecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
