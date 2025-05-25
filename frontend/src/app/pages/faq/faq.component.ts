import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { FAQItem } from '../../shared/models/faq-accordion.model';
import { FaqAccordionComponent } from '../../shared/faq-accordion/faq-accordion.component';

@Component({
  selector: 'app-faq',
  imports: [SectionTitleComponent, FaqAccordionComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqItems: FAQItem[] = [
    {
      question: 'What services do you offer?',
      answer:
        'We provide a wide range of services including AI solutions, cloud infrastructure management, and healthcare technology innovation.',
    },
    {
      question: 'How can I contact customer support?',
      answer:
        'You can reach out to our customer support team via email at support@company.com or through our contact page.',
    },
    {
      question: 'What is your return policy?',
      answer:
        "We offer a 30-day return policy on all services. If you're not satisfied with the service, you can request a full refund within 30 days of purchase.",
    },
  ];
}
