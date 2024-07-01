import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookseatComponent } from './bookseat.component';

describe('BookseatComponent', () => {
  let component: BookseatComponent;
  let fixture: ComponentFixture<BookseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookseatComponent]
    });
    fixture = TestBed.createComponent(BookseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
