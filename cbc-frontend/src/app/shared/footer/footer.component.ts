import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  year = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  portals = [
    { label: 'For Students', path: '/students' },
    { label: 'For Parents', path: '/parents' },
    { label: 'For Teachers', path: '/teachers' },
    { label: 'For Administrators', path: '/administrators' },
  ];
}