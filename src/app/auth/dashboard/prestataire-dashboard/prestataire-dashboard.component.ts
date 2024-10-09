import { Component } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';

@Component({
  selector: 'app-prestataire-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent],
  templateUrl: './prestataire-dashboard.component.html',
  styleUrl: './prestataire-dashboard.component.css'
})
export class PrestataireDashboardComponent {
  menuOpen = false;
  slides = [
    {imageSrc:'media/images/freelancer.png', imageAlt:'Freelancer', title:'Bonjour, Alias', text: 'Consultez toutes les collaborations en attente sur votre profil pour débuter un service.', url:'' },
    {imageSrc:'media/images/freelancer-f.png', imageAlt:'Freelancer', title:'Bonjour, Alias', text: 'Collaboration 2 en attente.', url:'/' },
    {imageSrc:'media/images/fiche.png', imageAlt:'Freelancer', title:'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url:'/' }
  ];
}
