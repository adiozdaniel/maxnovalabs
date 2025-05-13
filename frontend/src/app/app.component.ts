import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ScrollTopComponent } from './core/scroll-top/scroll-top.component';
import { PreloaderComponent } from './core/preloader/preloader.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ScrollTopComponent,
    PreloaderComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'maxnovalabs';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 2000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
      });
    }
  }
}
