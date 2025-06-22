import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-copyright',
  templateUrl: './footer-copyright.html',
  styleUrls: ['./footer-copyright.scss'],
})
export class FooterCopyright {
  currentYear: number = new Date().getFullYear();
}
