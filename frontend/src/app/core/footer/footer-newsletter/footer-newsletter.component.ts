import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer-newsletter.component.html',
  styleUrls: ['./footer-newsletter.component.scss'],
})
export class FooterNewsletterComponent {
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
