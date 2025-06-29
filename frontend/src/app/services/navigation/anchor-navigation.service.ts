import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AnchorNavigationService {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.handleNavigation();
        });
    }
  }

  private handleNavigation(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const urlTree = this.router.parseUrl(this.router.url);
    const fragment = urlTree.fragment;

    if (fragment) {
      setTimeout(() => {
        const element = this.document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }, 300);
    }
  }
}
