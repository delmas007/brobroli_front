import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet, RouterLink, RouterLinkActive, Router} from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { Person } from '../../../../domains/interfaces/person';
import { User } from '../../../../domains/interfaces/user';
import { Balance } from '../../../../domains/interfaces/balance';
import {FormBuilder} from "@angular/forms";
import {BrobroliService} from "../../../../core/services/brobroli.service";
import {StateService} from "../../../../core/services/state.service";

@Component({
  selector: 'app-projects-customer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatSlideToggleModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsCustomerComponent implements OnInit {
  balance: number = 0;
  currentUser: Person | null = null;
  users: User[] = [];
  isProvider: boolean = false;
  menuOpen = false;
  menuProjectOpen = false;
  projects: any[] = [];
  selectedProjectId: number | null = null;

  constructor(private router: Router,private fb:FormBuilder,private service: BrobroliService,private state:StateService) {}


  ngOnInit() {
    this.getCollaborationProvider();
    this.getCurrentUser();
    this.getBalance();
    this.getUsers();
    this.checkIfProvider();
    this.getProjects();
  }

  getCollaborationProvider(): void {
    this.service.getCollaborationProvider(this.state.authState.id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
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

  onShowMenu(id: number): void {
    this.menuProjectOpen = !this.menuProjectOpen;
    this.selectedProjectId = this.menuProjectOpen ? id : null;
  }

  onDownloadInvoice(id: number): void {
    console.log(`Téléchargement de la facture pour le projet ${id}`);
  }

  onDeleteProject(id: number): void {
    console.log(`Suppression du projet ${id}`);
  }

  getProjects(): void {
    this.projects = [
      { id: 1, freelancer: 'Delon', task: 'Conception site web', date: '15/05/2023', status: 'En cours' },
      { id: 2, freelancer: 'Delmas', task: 'Maintenance serveur', date: '18/05/2023', status: 'Terminé' },
      { id: 3, freelancer: 'Delmas', task: 'Développement application', date: '20/05/2023', status: 'Terminé' },
      { id: 4, freelancer: 'Soum', task: 'Développement application', date: '20/05/2023', status: 'Terminé' }
    ];
  }
}
