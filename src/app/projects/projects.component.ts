import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../interface/person';
import { User } from '../interface/user';
import { Balance } from '../interface/balance'; 

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatSlideToggleModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  balance: number = 0;
  currentUser: Person | null = null;
  users: User[] = [];
  isProvider: boolean = false;
  menuOpen = false;

  constructor() {}


  ngOnInit() {
    this.getCurrentUser();
    this.getBalance();
    this.getUsers();
    this.checkIfProvider();
  }

  getCurrentUser(): void {
    this.currentUser = new Person(
      1, 'utilisateur2', 'Delmas', 'Angaman', 'media/images/profile-delmas.png', 'delmas@gmail.com',
      'Abidjan', '0123456789', 'Bingerville', 'Développeur Fullstack',
      new Date(), new Date(), 
      [new Balance(2, 'slug', 247000)], 
      [{ id: 2, slug: 'utilisateur2', username: 'delmas', password: 'delmas', role: [{id: 1, name: 'customer'}] }]
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

  checkIfProvider(): void {
    if (this.currentUser && this.currentUser.user.length > 0) {
      this.isProvider = this.currentUser.user[0].role.some(role => role.name === 'provider');
    }
  }

  onAccept(): void {
    console.log('collaboration acceptée le client a été notifié');
  }

  onRefuse(): void {
    console.log('collaboration refusée le client a été notifié');
  }

  onDoneCollab(): void {
    console.log('vous avez validé la fin de la collaboration le prestataire a été notifié');
  }

  onUnDoneCollab(): void {
    console.log('vous n\'avez pas validé la fin de la collaboration le prestataire a été notifié');
  }

}

