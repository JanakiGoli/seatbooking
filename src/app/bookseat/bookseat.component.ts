import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-bookseat',
  templateUrl: './bookseat.component.html',
  styleUrls: ['./bookseat.component.css']
})
  export class BookseatComponent {
    gridData: any[] = [];
    constructor ( private router: Router,private bookingService: BookingService) {

    this.generateGridData(); }

    private generateGridData() {
      for(let i=1; i<= 18 ; i ++){
        this.gridData.push ({
          id:1,
          name : `AK0${i}`,
          module : `Module ${i}`,
          booked: false,
          finalized : false
        })
      }
    }


    selectedSeat: any = null;

    confirmBooking(item : any)
    {
      if(!item.booked && !item.finalized)
      {
        //if(confirm('Do you want to book seat '+ item.name+ '? click Ok to confirm ')){
        if(this.selectedSeat !== null){
          this.selectedSeat.booked = false;
        }
        this.selectedSeat = item;
        item.booked = true;
        item.finalized = true;
        //alert('Seat  '+ item.name + ' booked');
         const bookingDetails = {name: item.name, module: item.module};
        this.bookingService.setbookSeat(this.selectedSeat);
       // console.log('booking details', bookingDetails);
        this.router.navigate(['/mybooking']);
          
      //}
    }
    else if(item.booked && item.finalized){
      alert('Seat '+item.name + ' is already booked');
    }
  }

}


