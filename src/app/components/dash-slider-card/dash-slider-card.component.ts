import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface Slide {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  url: string;
  btnText: string;
}

@Component({
  selector: 'app-dash-slider-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dash-slider-card.component.html',
  styleUrl: './dash-slider-card.component.css'
})

export class DashSliderCardComponent implements OnInit, OnDestroy {

  @Input() slides: Slide[] = [];
  @Input() indicators = true;
  @Input() autoSlide = false;


  selectedSlide = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {}

  startAutoSlide(): void {}

  selectSlide(index: number): void {
    this.selectedSlide = index;
  }
}
