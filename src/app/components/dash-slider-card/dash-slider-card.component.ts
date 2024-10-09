import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

interface Slide {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  url: string;
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
  // slideInterval = 3000;

  // autoSlideInterval: any;

  selectedSlide = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.startAutoSlide();
    }
  }

  ngOnDestroy(): void {
    // if (this.autoSlideInterval) {
    //   clearInterval(this.autoSlideInterval);
    // }
  }

  startAutoSlide(): void {
    // this.autoSlideInterval = setInterval(() => {
    //   this.selectSlide((this.selectedSlide + 1) % this.slides.length);
    // }, this.slideInterval);
  }

  selectSlide(index: number): void {
    this.selectedSlide = index;
  }
}
