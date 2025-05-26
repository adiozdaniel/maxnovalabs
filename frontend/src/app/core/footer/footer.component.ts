import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FooterNewsletterComponent } from './footer-newsletter/footer-newsletter.component';
import { FooterTopComponent } from './footer-top/footer-top.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    FooterNewsletterComponent,
    FooterTopComponent,
    FooterCopyrightComponent,
  ],
})
export class FooterComponent {}
