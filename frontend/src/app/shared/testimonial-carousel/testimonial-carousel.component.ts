import { Component, Input } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial-carousel',
  imports: [CommonModule],
  templateUrl: './testimonial-carousel.component.html',
  styleUrls: ['./testimonial-carousel.component.scss'],
})
export class TestimonialCarouselComponent {
  @Input() testimonials: Testimonial[] = [];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
