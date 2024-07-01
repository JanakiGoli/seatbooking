import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookseatComponent } from './bookseat/bookseat.component';
import { GroupbookingComponent } from './groupbooking/groupbooking.component';
import { IndividualBookingComponent } from './individual-booking/individual-booking.component';
import { MybookingComponent } from './mybooking/mybooking.component';
import { SelectseatComponent } from './selectseat/selectseat.component';

const routes: Routes = [
 { path : "", component : SelectseatComponent },
 { path : 'individual-booking', component: IndividualBookingComponent},
 { path : 'groupbooking', component : GroupbookingComponent},
 { path: 'bookseat',component : BookseatComponent},
 { path : 'mybooking', component : MybookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
