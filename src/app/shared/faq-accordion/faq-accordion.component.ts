import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FAQItem } from '../models/faq-accordion.model';

@Component({
  selector: 'app-faq-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-accordion.component.html',
  styleUrl: './faq-accordion.component.scss',
})
export class FaqAccordionComponent {
  @Input() faqs: FAQItem[] = [];
  activeIndex: number | null = null;

  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
