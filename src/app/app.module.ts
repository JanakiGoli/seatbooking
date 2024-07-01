import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectseatComponent } from './selectseat/selectseat.component';
import { IndividualBookingComponent } from './individual-booking/individual-booking.component';
import { GroupbookingComponent } from './groupbooking/groupbooking.component';
import { BookseatComponent } from './bookseat/bookseat.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { BookingService } from './services/booking.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectseatComponent,
    IndividualBookingComponent,
    GroupbookingComponent,
    BookseatComponent,
    MybookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
