import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})

export class ClientDashboardComponent {
  title = 'client-dashboard';
  menuOpen = false;

  slides = [
    {imageSrc:'media/images/freelancer.png', imageAlt:'Freelancer', title:'Bonjour, Alias', text: 'Consultez toutes les collaborations en attente sur votre profil pour débuter un service.', url:'' },
    {imageSrc:'media/images/freelancer-f.png', imageAlt:'Freelancer', title:'Bonjour, Alias', text: 'Collaboration 2 en attente.', url:'/' },
    {imageSrc:'media/images/fiche.png', imageAlt:'Freelancer', title:'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url:'/' }
  ];
}
