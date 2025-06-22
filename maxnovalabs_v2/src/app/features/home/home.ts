import { Component } from '@angular/core';
import { fadeUp } from '../../shared/animations/fadeUp.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  animations: [fadeUp],
})
export class Home {}
