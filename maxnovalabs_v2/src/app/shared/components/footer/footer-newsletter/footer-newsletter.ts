import { Component } from '@angular/core';
import { SectionTitle } from "../../section-title/section-title";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-newsletter',
  imports: [SectionTitle, FormsModule, CommonModule],
  templateUrl: './footer-newsletter.html',
  styleUrl: './footer-newsletter.scss',
})
export class FooterNewsletter {
  email = '';
  message = '';
  success = false;

  onSubscribe(event: Event) {
    event.preventDefault();

    if (!this.email.trim()) {
      this.success = false;
      this.message = 'Please enter a valid email address.';
      return;
    }

    this.success = true;
    this.message = `Thanks for subscribing, ${this.email}!`;
    this.email = '';
  }
}
