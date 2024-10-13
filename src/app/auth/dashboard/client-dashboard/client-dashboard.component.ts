import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive,Router } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../interface/person';
import { User } from '../../../interface/user';
import { Balance } from '../../../interface/balance';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})

export class ClientDashboardComponent implements OnInit {
  title = 'client-dashboard';
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
    // this.currentUser = new Person(
    //   2, 'utilisateur2', 'Delmas', 'Angaman', 'media/images/profile-delmas.png', 'delmas@gmail.com',
    //   'Abidjan', '0123456789', 'Bingerville', 'Biographie de Delmas',
    //   new Date(), new Date(),
    //   [new Balance(2, 'slug', 247000)],
    //   [{ id: 2, slug: 'utilisateur2', username: 'delmas', password: 'delmas', role: [] }]
    // );
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
      {imageSrc: 'media/images/freelancer.png', imageAlt: 'Freelancer', title: `Bonjour, ${this.currentUser?.firstName || ''}`, text: 'Recherchez des freelancers pour une nouvelle collaboration.', url: '/search', btnText: 'Rechercher'},
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
}
