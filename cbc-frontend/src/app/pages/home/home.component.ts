import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  features = [
    'Flexible Learning Paths',
    'Real-Time Progress Tracking',
    'Data-Driven Insights',
    'Collaborative Community',
  ];
}