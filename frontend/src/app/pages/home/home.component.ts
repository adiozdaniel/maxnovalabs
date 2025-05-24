import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { Testimonial } from '../../shared/models/testimonial.model';
import { TestimonialCarouselComponent } from '../../shared/testimonial-carousel/testimonial-carousel.component';
import { ClientLogosCarouselComponent } from '../../shared/client-logos-carousel/client-logos-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionTitleComponent,
    TestimonialCarouselComponent,
    ClientLogosCarouselComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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

  clientLogos: string[] = [
    'img/clients/logo1.jpg',
    'img/clients/logo2.jpg',
    'img/clients/logo3.jpg',
    'img/clients/logo4.jpg',
    'img/clients/logo5.jpg',
    'img/clients/logo6.jpg',
  ];
}
