import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Clients } from "../../shared/clients/clients";
import { Portfolio } from "./portfolio/portfolio";

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Hero, Clients, Portfolio],
})
export class Home {}
