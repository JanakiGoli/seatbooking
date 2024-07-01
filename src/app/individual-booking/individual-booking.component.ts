import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-individual-booking',
  templateUrl: './individual-booking.component.html',
  styleUrls: ['./individual-booking.component.css']
})
export class IndividualBookingComponent implements OnInit {
 

  locations : string[] = ['Hyderabad','Indore','Banglore','Pune','Kolkata'];
  selectedLocation: string = '';
  inputLocation : string = '';
  employeeId: string = '';
  isValidEmployeeId: boolean = true;
  isValidLocation : boolean = false;
  validEmployeeIds: string[] = ['2135556','2136789','2139031','2138903','2139038'];
  isSelectSeatsVisible : boolean = false;

  constructor() {}
  ngOnInit(): void {
  }

  onLocationChange(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.inputLocation  = inputElement.value;
    if(!this.locations.includes(this.inputLocation)){
     // console.log("No search results found");
      this.selectedLocation = '';
      this.isValidLocation = false;
    }else {
      this.selectedLocation = this.inputLocation;
      this.isValidLocation = true;
    }
    this.updateSelectSeatsVisibility();
  }

  onEmployeeIdChange(event : Event)
  {
    const inputElement = event.target as HTMLInputElement;
    this.employeeId = inputElement.value.trim();
    this.isValidEmployeeId = this.employeeId === '' || this.validEmployeeIds.includes(this.employeeId);
    this.updateSelectSeatsVisibility();
  }

  onSearchSeats(){
    if(this.isValidEmployeeId && this.isValidLocation)
    {
      this.isSelectSeatsVisible = true;
    }
  }

  updateSelectSeatsVisibility() {
    if(!this.isValidEmployeeId && this.isValidLocation)
    {
      this.isSelectSeatsVisible = true;
    }
    else{
      this.isSelectSeatsVisible = false;
    }
  }

}
