import {Component, OnInit} from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../domains/interfaces/person';
import { User } from '../../../domains/interfaces/user';
import { Balance } from '../../../domains/interfaces/balance';
import {BrobroliService} from "../../../core/services/brobroli.service";
import {StateService} from "../../../core/services/state.service";

@Component({
  selector: 'app-prestataire-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './prestataire-dashboard.component.html',
  styleUrl: './prestataire-dashboard.component.css'
})
export class PrestataireDashboardComponent implements OnInit {
  constructor(private service: BrobroliService,private state: StateService) {
  }
  menuOpen = false;
  modalWithdrawOpen = false;

  balance: any ;
  currentUser: Person | null = null;
  users: User[] = [];
  slides: any[] = [];

  ngOnInit(): void {
    this.getProlfil();
    this.getCurrentUser();
    this.getBalance();
    this.getUsers();
    this.initializeSlides();
  }
  getProlfil(): void {
    this.service.getProvider(this.state.authState.id).subscribe(
      data => {
        console.log(data);
        this.balance= data.balance.sum
      },
      error => {
        console.log(error);
      }
    );
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
