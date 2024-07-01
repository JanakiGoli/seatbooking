import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  bookings: any[] = [];
  constructor(public bookingService: BookingService ){}
  ngOnInit(): void {
    this.bookings.push(this.bookingService.getbookSeat());
    console.log(this.bookings);
    this.bookings = [...this.bookings];

    // this.bookingService.booking$.subscribe(bookingSubject =>  {
    //   this.bookingService = bookingSubject;
    // });
  }


}
