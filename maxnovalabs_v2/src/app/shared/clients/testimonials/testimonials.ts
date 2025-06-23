import { Component, Input } from '@angular/core';
import { Testimonial } from '../../../core/models/testimonial';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class Testimonials {
  @Input() testimonials: Testimonial[] = [];
  currentIndex = 0;
  private intervalId: any;

  ngOnInit() {
      this.startSlideshow();
  }

  ngOnDestroy() {
      this.clearSlideshow();
  }

  private startSlideshow() {
    this.clearSlideshow();
    this.intervalId = setInterval(() => this.next(), 5000);
  }

  private clearSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}
