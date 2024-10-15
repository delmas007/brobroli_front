import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { User } from '../domains/interfaces/user';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-collab-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './collab-profile.component.html',
  styleUrl: './collab-profile.component.css'
})
export class CollabProfileComponent {

}
