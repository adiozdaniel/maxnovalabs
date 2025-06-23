import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Clients } from "../../shared/clients/clients";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Hero, Clients],
})
export class Home {}
