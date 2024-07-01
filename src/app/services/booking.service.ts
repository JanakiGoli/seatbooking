import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  private bookingSubject = new BehaviorSubject<any> (null);
  
  booking$ = this.bookingSubject.asObservable ();

  setbookSeat(bookingDetails: any) {
    this.bookingSubject.next(bookingDetails);
  }
  
  getbookSeat(){
    return this.bookingSubject.value;
    
  };
}
