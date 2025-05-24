import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TestimonialCarouselComponent } from '../../shared/testimonial-carousel/testimonial-carousel.component';

@Component({
  selector: 'app-home',
  imports: [SectionTitleComponent, TestimonialCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Jane Doe',
      title: 'CEO, HealthTech',
      quote: 'MaxNovaLabs transformed our diagnostics pipeline with AI.',
      image: 'assets/img/testimonials/jane.jpg',
    },
    {
      name: 'John Smith',
      title: 'CTO, Cloudify',
      quote: 'Scalable infrastructure, delivered on time. Excellent team!',
      image: 'assets/img/testimonials/john.jpg',
    },
  ];
}
