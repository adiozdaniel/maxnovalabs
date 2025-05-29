import { Component } from '@angular/core';
import { Testimonial } from '../../shared/models/testimonial.model';
import { ClientLogosCarouselComponent } from '../../shared/client-logos-carousel/client-logos-carousel.component';
import { TestimonialCarouselComponent } from '../../shared/testimonial-carousel/testimonial-carousel.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [ClientLogosCarouselComponent, TestimonialCarouselComponent],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Jane Doe',
      title: 'CEO, HealthTech',
      quote: 'MaxNovaLabs transformed our diagnostics pipeline with AI.',
      image: 'img/testimonials/jane.jpg',
    },
    {
      name: 'John Smith',
      title: 'CTO, Cloudify',
      quote: 'Scalable infrastructure, delivered on time. Excellent team!',
      image: 'img/testimonials/john.jpg',
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
