import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectseatComponent } from './selectseat.component';

describe('SelectseatComponent', () => {
  let component: SelectseatComponent;
  let fixture: ComponentFixture<SelectseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectseatComponent]
    });
    fixture = TestBed.createComponent(SelectseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
