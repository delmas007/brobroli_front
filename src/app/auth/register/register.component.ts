import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import * as AOS from 'aos';
import { FormsModule } from '@angular/forms';
import { User } from '../../interface/user';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  errorMessage: string = '';
  utilisateurs: User[] = [];
  username: string = '';
  password: string = '';

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

  ngOnInit(): void {
    AOS.init();
  }

  onRegister() {
    this.router.navigate(['/dashboard-client']);
  }
}
