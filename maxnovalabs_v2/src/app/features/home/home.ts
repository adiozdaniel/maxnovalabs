import { Component } from '@angular/core';
import { Hero } from "./hero/hero";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Hero],
})
export class Home {}
