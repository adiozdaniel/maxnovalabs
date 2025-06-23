import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';
import { Testimonials } from './testimonials/testimonials';
import { ClientLogos } from './client-logos/client-logos';
import { Testimonial } from '../../core/models/testimonial';

@Component({
  selector: 'app-clients',
  imports: [SectionTitle, Testimonials, ClientLogos],
  templateUrl: './clients.html',
  styleUrls: ['./clients.scss'],
})
export class Clients {
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
    'img/clients/logo1.png',
    'img/clients/logo2.png',
    'img/clients/logo3.png',
    'img/clients/logo4.png',
    'img/clients/logo5.png',
    'img/clients/logo6.png',
  ];
}
