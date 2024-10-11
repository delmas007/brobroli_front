import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DashSliderCardComponent } from '../../../components/dash-slider-card/dash-slider-card.component';
import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, DashSliderCardComponent, MatSlideToggleModule, MatIconModule],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})

export class ClientDashboardComponent {
  title = 'client-dashboard';
  menuOpen = false;

  slides = [
    {imageSrc: 'media/images/fiche.png', imageAlt: 'Freelancer', title: 'Inscription incomplète', text: 'Veuillez terminer votre inscription pour débuter une collaboration.', url: '/final-registration', btnText: 'Finaliser'},
    {imageSrc: 'media/images/freelancer.png', imageAlt: 'Freelancer', title: 'Bonjour, Alias', text: 'Recherchez des freelancers pour une nouvelle collaboration.', url: '/search', btnText: 'Rechercher'},
    {imageSrc: 'media/images/freelancer-f.png', imageAlt: 'Freelancer', title: 'Mes projets', text: 'Obtenez une vue d\'ensemble complète de vos projets en cours et achevés.', url: '/projects', btnText: 'Voir les projets'}
  ];
}