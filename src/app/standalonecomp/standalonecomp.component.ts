import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalonecomp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standalonecomp.component.html',
  styleUrls: ['./standalonecomp.component.css']
})
export class StandalonecompComponent {

}
