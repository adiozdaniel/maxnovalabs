import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-copyright',
  imports: [],
  templateUrl: './footer-copyright.component.html',
  styleUrls: ['./footer-copyright.component.scss'],
})
export class FooterCopyrightComponent {
  currentYear: number = new Date().getFullYear();
}
