import { Component } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-prestataire-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './prestataire-dashboard.component.html',
  styleUrl: './prestataire-dashboard.component.css'
})
export class PrestataireDashboardComponent {
  menuOpen = false;
  slides = [
    {imageSrc:'media/images/fiche.png', imageAlt:'Freelancer', title:'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url:'/', btnText:'Finaliser' },
    {imageSrc:'media/images/freelancer.png', imageAlt:'Freelancer', title:'Bonjour, Masta', text: 'Consultez toutes les collaborations en attente sur votre profil pour débuter un service.', url:'', btnText:'Voir les projets' },
    {imageSrc:'media/images/freelancer-f.png', imageAlt:'Freelancer', title:'Bonjour, Masta', text: 'Collaboration 2 en attente.', url:'/', btnText:'Voir les projets' }
    
  ];
}
