import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [NavbarComponent, MatIconModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  modalCollabOpen = false;
  solde: number = 0;
  abuy: number = 85000;
  errorMessage: string = '';
  showPayButton: boolean = true;

  constructor(private router: Router) {}

  onCollabSubmit() {
    if (this.solde < this.abuy) {
      this.errorMessage = "Votre solde est insuffisant pour effectuer cette collaboration. Veuillez recharger votre compte.";
      this.showPayButton = false;
    } else {
      this.router.navigate(['/profile']);
    }
  }
}
