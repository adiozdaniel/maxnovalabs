import { Component } from '@angular/core';
import { HeaderLogo } from '../header-logo/header-logo';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [HeaderLogo],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  activeSection: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveSection();
      });
  }

  updateActiveSection() {
    const url = this.router.url;
    const mainPath = url.split('#')[0].replace('/', '');
    const fragment = url.split('#')[1];

    this.activeSection = fragment || mainPath || 'home';
  }

  isDropdownActive(): boolean {
    const dropdownSections = ['health', 'blockchain', 'e-commerce'];
    return dropdownSections.includes(this.activeSection);
  }
}
