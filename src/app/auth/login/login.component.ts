import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { User } from '../../interface/user';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
  utilisateurs: User[] = [];
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(private router: Router) {
    this.utilisateurs = [
      {
        id: 1,
        slug: 'utilisateur1',
        username: 'delon',
        password: 'delon',
        role: [{id: 1, name: 'provider'}]
      },
      {
        id: 2,
        slug: 'utilisateur2',
        username: 'delmas',
        password: 'delmas',
        role: [{id: 1, name: 'customer'}]
      }
    ] as User[];
  }

  ngOnInit(): void {AOS.init();}

  onLogin() {
    const utilisateur = this.utilisateurs.find(user => user.username === this.username && user.password === this.password);
    if (utilisateur) {
      switch (utilisateur.role[0].name) {
        case 'customer':
          this.router.navigate(['/dashboard-client']);
          break;
        case 'provider':
          this.router.navigate(['/dashboard-prestataire']);
          break;
        default:
          this.errorMessage = 'Vous n\'êtes pas autorisé à accéder à cette application';
        }
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
