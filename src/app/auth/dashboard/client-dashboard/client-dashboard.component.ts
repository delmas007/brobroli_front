import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../domains/interfaces/person';
import { User } from '../../../domains/interfaces/user';
import { Balance } from '../../../domains/interfaces/balance';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule, FormsModule],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})

export class ClientDashboardComponent implements OnInit {
  title = 'client-dashboard';
  menuOpen = false;
  modalPayOpen = false;
  modalWithdrawOpen = false;
  searchOpen = false;
  balance: number = 0;
  currentUser: Person | null = null;
  users: User[] = [];
  slides: any[] = [];
  private router: Router;

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

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getBalance();
    this.getUsers();
    this.initializeSlides();
  }

  getCurrentUser(): void {

  }

  getBalance(): void {
    if (this.currentUser && this.currentUser.balance.length > 0) {
      this.balance = this.currentUser.balance[0].sum;
    }
  }

  getUsers(): void {
    if (this.currentUser) {
      this.users = this.currentUser.user;
    }
  }

  isProfileComplete(): boolean {
    if (!this.currentUser) return false;
    return Object.values(this.currentUser).every(value =>
      value !== null && value !== undefined && value !== ''
    );
  }

  initializeSlides(): void {
    this.slides = [
      {imageSrc: 'media/images/fiche.png', imageAlt: 'Freelancer', title: 'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url: '/final-registration', btnText: 'Finaliser'},
      {imageSrc: 'media/images/freelancer.png', imageAlt: 'Freelancer', title: `Bonjour, ${this.currentUser?.firstName || ''}`, text: 'Recherchez des freelancers pour une nouvelle collaboration.', action: 'searchOpen = true', btnText: 'Rechercher'},
      {imageSrc: 'media/images/freelancer-f.png', imageAlt: 'Freelancer', title: 'Mes projets', text: 'Obtenez une vue d\'ensemble complète de vos projets en cours et achevés.', url: '/projects', btnText: 'Voir les projets'}
    ];
  }

  get slidesToShow(): any[] {
    if (this.isProfileComplete()) {
      return this.slides.slice(1);
    } else {
      return this.slides;
    }
  }
  onPaySubmit(): void {
    console.log('Rechargement du solde');
  }
  onWithdrawSubmit(): void {
    console.log('Retrait du solde');
  }
  onSearch(): void {
    this.router.navigate(['/search'], { queryParams: this.searchCriteria });
  }

}
