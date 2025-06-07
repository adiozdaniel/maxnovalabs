import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HeaderLogoComponent } from "../header-logo/header-logo.component";
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, HeaderLogoComponent, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  isDark = false;

  private isBrowser: boolean;
  private backendHasPreference = false;
  private systemMediaQuery: MediaQueryList | null = null;
  private mediaListener: ((e: MediaQueryListEvent) => void) | null = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }
    this.initializeTheme();
  }

  ngOnDestroy() {
    if (this.systemMediaQuery && this.mediaListener) {
      this.systemMediaQuery.removeEventListener('change', this.mediaListener);
    }
  }

  private async initializeTheme() {
    try {
      const resp = await this.http
        .get<{ theme: 'dark' | 'light' | null }>('/api/theme')
        .toPromise();

      if (resp && (resp.theme === 'dark' || resp.theme === 'light')) {
        this.backendHasPreference = true;
        this.applyTheme(resp.theme === 'dark');
      } else {
        this.backendHasPreference = false;
        this.listenToSystemPreference();
      }
    } catch {
      this.backendHasPreference = false;
      this.listenToSystemPreference();
    }
  }

  private listenToSystemPreference() {
    this.systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemPrefersDark = this.systemMediaQuery.matches;

    this.applyTheme(systemPrefersDark);
    this.mediaListener = (e: MediaQueryListEvent) => {
      if (!this.backendHasPreference) {
        this.applyTheme(e.matches);
      }
    };
    this.systemMediaQuery.addEventListener('change', this.mediaListener);
  }

  toggleTheme() {
    if (!this.isBrowser) {
      return;
    }
    this.isDark = !this.isDark;
    this.applyTheme(this.isDark);
    this.backendHasPreference = true;
    
    this.http
      .post('/api/theme', { theme: this.isDark ? 'dark' : 'light' })
      .subscribe({
        // TODO: handle backend errors
      });
  }

  private applyTheme(dark: boolean) {
    this.isDark = dark;
    if (!this.isBrowser) {
      return;
    }
    const body = document.body;
    if (dark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }
}
