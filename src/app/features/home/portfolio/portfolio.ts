import { Component } from '@angular/core';
import { SectionTitle } from '../../../shared/section-title/section-title';
import { fadeUp } from '../../../core/animations/fadeUp.animations';

@Component({
  selector: 'app-portfolio',
  imports: [SectionTitle],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss'],
  animations: [fadeUp],
})
export class Portfolio {}
