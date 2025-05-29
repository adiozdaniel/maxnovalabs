import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-code', 
      title: 'Web Development',
      description:
        'Build responsive, scalable web applications with modern frameworks like React and Node.js.',
    },
    {
      icon: 'fas fa-heartbeat', 
      title: 'AI in Healthcare',
      description:
        'Leverage AI to enhance diagnostics, patient care, and medical research with secure, compliant solutions.',
    },
    {
      icon: 'fas fa-mobile-alt', 
      title: 'Mobile Apps',
      description:
        'Develop cross-platform mobile apps with seamless performance using Flutter and Swift.',
    },
    {
      icon: 'fas fa-rocket', 
      title: 'Startup Development',
      description:
        'Transform your startup idea into a market-ready MVP with agile development and strategic guidance.',
    },
  ];
}
