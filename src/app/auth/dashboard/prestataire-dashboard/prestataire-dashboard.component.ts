import { Component } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../interface/person';
import { User } from '../../../interface/user';
import { Balance } from '../../../interface/balance';

@Component({
  selector: 'app-prestataire-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './prestataire-dashboard.component.html',
  styleUrl: './prestataire-dashboard.component.css'
})
export class PrestataireDashboardComponent {
  menuOpen = false;
  modalPayOpen = false;
  modalWithdrawOpen = false;

  balance: number = 0;
  currentUser: Person | null = null;
  users: User[] = [];
  slides: any[] = [];

  ngOnInit(): void {
    this.getCurrentUser();
    this.getBalance();
    this.getUsers();
    this.initializeSlides();
  }

  getCurrentUser(): void {
    this.currentUser = new Person(
      1, 'utilisateur1', 'Delon', 'Jean-Philippe', 'media/images/profile.png', 'delon@gmail.com',
      'Abidjan', '0123456789', 'Cocody', 'Biographie de Delon',
      new Date(), new Date(), 
      [new Balance(2, 'slug', 247000)], 
      [{ id: 2, slug: 'utilisateur2', username: 'delon', password: 'delon', role: [] }]
    );
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
    {imageSrc:'media/images/fiche.png', imageAlt:'Freelancer', title:'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url:'/final-registration', btnText:'Finaliser' },
    {imageSrc:'media/images/freelancer.png', imageAlt:'Freelancer', title: `Bonjour, ${this.currentUser?.firstName || ''}`, text: 'Consultez toutes les collaborations en attente sur votre profil pour débuter un service.', url:'/projects', btnText:'Voir les projets' },
    {imageSrc:'media/images/freelancer-f.png', imageAlt:'Freelancer', title:'Bonjour, Masta', text: 'Collaboration 2 en attente.', url:'/', btnText:'Voir les projets' }
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
}
