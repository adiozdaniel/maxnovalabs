import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  isDark = false;
  showToggle = true;

  /** true if running in the browser environment (no window on server) */
  private isBrowser: boolean;

  /** true if the backend returned a non‐null theme */
  private backendHasPreference = false;

  /** Will hold the MediaQueryList so we can remove listener on destroy */
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
      // On the server, do nothing; client side will invoke initializeTheme()
      return;
    }
    this.initializeTheme();
  }

  ngOnDestroy() {
    // If we set up a listener on the system preference, remove it now.
    if (this.systemMediaQuery && this.mediaListener) {
      this.systemMediaQuery.removeEventListener('change', this.mediaListener);
    }
  }

  private async initializeTheme() {
    try {
      // 1) Fetch saved theme from backend (null | 'light' | 'dark')
      const resp = await this.http
        .get<{ theme: 'dark' | 'light' | null }>('/api/theme')
        .toPromise();

      if (resp && (resp.theme === 'dark' || resp.theme === 'light')) {
        // Backend has an explicit preference—use it, ignore system changes
        this.backendHasPreference = true;
        this.applyTheme(resp.theme === 'dark');
        this.showToggle = true;
      } else {
        // No backend preference—listen to system setting
        this.backendHasPreference = false;
        this.listenToSystemPreference();
      }
    } catch {
      // On HTTP error, fall back to system preference
      this.backendHasPreference = false;
      this.listenToSystemPreference();
    }
  }

  private listenToSystemPreference() {
    // Create a MediaQueryList for "(prefers-color-scheme: dark)"
    this.systemMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // First, apply whatever the system currently prefers
    const systemPrefersDark = this.systemMediaQuery.matches;
    this.applyTheme(systemPrefersDark);

    // If system is dark right now, hide the toggle; otherwise show it
    this.showToggle = !systemPrefersDark;

    // Listen for any future changes to system preference
    this.mediaListener = (e: MediaQueryListEvent) => {
      // Only update if there is no backend preference
      if (!this.backendHasPreference) {
        this.applyTheme(e.matches);
        this.showToggle = !e.matches;
      }
    };
    this.systemMediaQuery.addEventListener('change', this.mediaListener);
  }

  toggleTheme() {
    if (!this.isBrowser) {
      return;
    }
    // User manually toggles; override any system setting
    this.isDark = !this.isDark;
    this.applyTheme(this.isDark);

    // Since user has now made an explicit choice, save to backend
    this.backendHasPreference = true;
    this.http
      .post('/api/theme', { theme: this.isDark ? 'dark' : 'light' })
      .subscribe({
        // ignore success/errors for now
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
