import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  cards = [
    {
      title: 'Bonjour, Alias',
      text: 'Consultez toutes les collaborations en attente sur votre profil pour débuter un service.',
      link: 'http://'
    },
    { title: 'Carte 2', text: 'Ceci est la carte 2', link: 'https://www.example.com' },
    { title: 'Carte 3', text: 'Ceci est la carte 3', link: 'https://www.example.com' },
  ];

  currentCard = 0;
  constructor() { }
  ngOnInit(): void {
    this.startCardRotation();
  }
  startCardRotation(): void {
    setInterval(() => {this.currentCard = (this.currentCard + 1) % this.cards.length;}, 3000);
  }
}
