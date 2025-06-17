import { Component } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { StatsComponent } from '../shared/stats/stats.component';
import { ClientsComponent } from '../pages/clients/clients.component';
import { ServicesComponent } from '../pages/services/services.component';
import { PortfolioComponent } from '../pages/portfolio/portfolio.component';
import { TeamComponent } from '../pages/team/team.component';
import { FaqComponent } from '../pages/faq/faq.component';
import { ContactComponent } from '../pages/contact/contact.component';

@Component({
  selector: 'app-main-component',
  imports: [
    HomeComponent,
    AboutComponent,
    StatsComponent,
    ClientsComponent,
    ServicesComponent,
    PortfolioComponent,
    TeamComponent,
    FaqComponent,
    ContactComponent,
  ],
  templateUrl: './main-component.component.html',
})
export class MainComponentComponent {}
