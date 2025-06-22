import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Footer],
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
