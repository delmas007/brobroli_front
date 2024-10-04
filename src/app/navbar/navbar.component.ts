import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;
  isMenuOpen = false;

  toggleMenu() {
    const modal = document.querySelector('.menu-modal') as HTMLElement;
    if (this.isMenuOpen) {
      modal.style.animation = 'wipe-out-down 0.5s ease forwards';
      modal.addEventListener('animationend', () => {
        modal.style.display = 'none';
      }, { once: true });
    } else {
      modal.style.display = 'flex';
      modal.style.animation = 'wipe-in-up 0.5s ease forwards';
    }
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    
    if (scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
