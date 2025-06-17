import {
  Component,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { ScrollSpyDirective } from '../../directives/scroll-spy.directive';

@Component({
  selector: 'app-main-nav',
  imports: [
    CommonModule,
    HeaderLogoComponent,
    ScrollSpyDirective,
    RouterModule,
  ],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent implements OnInit, OnDestroy {
  isDark = false;
  activeSection = 'home';

  public isBrowser: boolean;
  private backendHasPreference = false;
  private systemMediaQuery: MediaQueryList | null = null;
  private mediaListener: ((e: MediaQueryListEvent) => void) | null = null;
  validSectionsDebug: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (!this.isBrowser) return;

    this.initializeTheme();
    this.setupRouteListener();
  }

  onSectionChange(sectionId: string) {
    this.activeSection = sectionId;
  }

  isDropdownActive(): boolean {
    return ['health', 'blockchain', 'e-commerce'].includes(this.activeSection);
  }

  private setupRouteListener() {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          this.activeSection = fragment;
        } else {
          this.activeSection = 'home';
        }
      });
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
    if (!this.isBrowser) return;

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
    if (!this.isBrowser) return;
    this.isDark = !this.isDark;
    this.applyTheme(this.isDark);
    this.backendHasPreference = true;

    this.http
      .post('/api/theme', { theme: this.isDark ? 'dark' : 'light' })
      .subscribe();
  }

  private applyTheme(dark: boolean) {
    this.isDark = dark;
    if (!this.isBrowser) return;
    document.body.classList.toggle('dark-theme', dark);
  }
}
