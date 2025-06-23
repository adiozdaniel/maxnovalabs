import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/section-title/section-title';
import { fadeUp } from '../../core/animations/fadeUp.animations';

@Component({
  selector: 'app-about',
  imports: [SectionTitle],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  animations: [fadeUp],
})
export class About {}
