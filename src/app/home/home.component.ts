import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  searchCriteria = {
    service: '',
    priceRange: ''
  };

  services = [
    { value: 'DEVELOPPEMENT_MOBILE', label: 'Développement mobile' },
    { value: 'DEVELOPPEMENT_WEB', label: 'Développement web' },
    { value: 'DESIGN_GRAPHIQUE', label: 'Design graphique' },
    { value: 'FORMATION', label: 'Formation' },
    { value: 'MARKETING', label: 'Marketing digital' },
    { value: 'PHOTOGRAPHIE', label: 'Photographie' }
  ];

  priceRanges = [
    { value: '25k-100k', label: '25k-100k' },
    { value: '100k-300k', label: '100k-300k' },
    { value: '300k-600k', label: '300k-600k' },
    { value: '600k-1M', label: '600k-1M' }
  ];
  ngOnInit(): void {AOS.init();}


  constructor(private router: Router) {}

  onSearch() {
    this.router.navigate(['/search'], { queryParams: this.searchCriteria });
  }
}
