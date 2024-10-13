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

  constructor(private router: Router) {}



  onCollabSubmit(){
    this.router.navigate(['/profile']);

  }
}
