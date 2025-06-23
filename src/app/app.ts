import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { Footer } from './shared/footer/footer';
import { PreLoader } from './shared/loaders/pre-loader/pre-loader';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer, PreLoader],
  templateUrl: './app.html',
})
export class App {
  showHeader = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkHeaderVisibility(event.url);
      });
  }

  checkHeaderVisibility(url: string): void {
    const noHeaderRoutes = ['/login', '/register'];

    this.showHeader = !noHeaderRoutes.some((route) => url.startsWith(route));
  }
}
