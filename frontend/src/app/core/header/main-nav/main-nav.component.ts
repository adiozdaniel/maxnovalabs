import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit {
  isDark = false;
  showToggle = true;
  private isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.initializeTheme();
    }
  }

  private async initializeTheme() {
    try {
      const resp = await this.http
        .get<{ theme: 'dark' | 'light' | null }>('/api/theme')
        .toPromise();

      if (resp && (resp.theme === 'dark' || resp.theme === 'light')) {
        this.applyTheme(resp.theme === 'dark');
        this.showToggle = true;
      } else {
        const systemPrefersDark = window.matchMedia(
          '(prefers-color-scheme: dark)'
        ).matches;
        if (systemPrefersDark) {
          this.applyTheme(true);
          this.showToggle = false;
        } else {
          this.applyTheme(false);
          this.showToggle = true;
        }
      }
    } catch {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.applyTheme(systemPrefersDark);
      this.showToggle = !systemPrefersDark;
    }
  }

  toggleTheme() {
    if (!this.isBrowser) return;
    this.isDark = !this.isDark;
    this.applyTheme(this.isDark);
    // Send preference back to backend
    this.http
      .post('/api/theme', { theme: this.isDark ? 'dark' : 'light' })
      .subscribe({
        // ignore errors, UI already updated
      });
  }

  private applyTheme(dark: boolean) {
    this.isDark = dark;
    if (!this.isBrowser) return;
    const body = document.body;
    if (dark) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }
}
