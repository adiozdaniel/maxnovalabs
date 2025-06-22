import { Component } from '@angular/core';
import { FooterNewsletter } from './footer-newsletter/footer-newsletter';
import { FooterTop } from './footer-top/footer-top';
import { FooterCopyright } from './footer-copyright/footer-copyright';

@Component({
  selector: 'app-footer',
  imports: [FooterNewsletter, FooterTop, FooterCopyright],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {}
