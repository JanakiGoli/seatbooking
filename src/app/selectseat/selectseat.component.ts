import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectseat',
  templateUrl: './selectseat.component.html',
  styleUrls: ['./selectseat.component.css']
})
export class SelectseatComponent {

  currentPage : string;

  constructor(private router: Router){
    this.currentPage = this.getCurrentPage();
  }

  navigateToPage(page : string)
  {
    //to update current page
    this.currentPage = page;

    this.router.navigate([page]);
  }

  private getCurrentPage(): string{
    const currentRoute = this.router.url;
    if(currentRoute === '/individual-booking')
    {
      return 'individual-booking';
    }
    else if (currentRoute === '/groupbooking') {
      return 'groupbooking';
    }
    else 
    {
      return 'individual-booking';
    }

  }

}
