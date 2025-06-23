import { Component } from '@angular/core';
import { fadeUp } from '../../../shared/animations/fadeUp.animations';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  animations: [fadeUp],
})
export class Hero {}
