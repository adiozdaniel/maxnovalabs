import {
  Directive,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Directive({ selector: '[appScrollSpy]' })
export class ScrollSpyDirective implements AfterViewInit, OnDestroy {
  @Output() sectionChange = new EventEmitter<string>();
  private observer: IntersectionObserver | undefined;
  private validSections = new Set<string>();
  private lastEmitted: string | null = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: Object,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const links = this.el.nativeElement.querySelectorAll('a');
    links.forEach((a: HTMLAnchorElement) => {
      const fragment =
        a.getAttribute('fragment') || a.getAttribute('ng-reflect-fragment');

      if (!fragment) {
        const href = a.getAttribute('href') || '';
        const fragmentMatch = href.match(/#([a-z0-9-]+)$/i);
        if (fragmentMatch) {
          this.validSections.add(fragmentMatch[1]);
          return;
        }
      }

      if (fragment) {
        this.validSections.add(fragment);
      }
    });

    this.ngZone.runOutsideAngular(() => this.initObserver());
  }

  private initObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -50% 0px',
      threshold: [0.1], // Lower threshold for better detection
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && this.validSections.has(id) && id !== this.lastEmitted) {
            this.lastEmitted = id;
            this.ngZone.run(() => this.sectionChange.emit(id));
          }
        }
      });
    }, options);

    const sections = this.document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((sec) => {
      this.observer?.observe(sec);
    });

    this.checkVisibleSections();
  }

  private checkVisibleSections() {
    const sections = Array.from(
      this.document.querySelectorAll<HTMLElement>('section[id]')
    );
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.5 &&
        rect.bottom >= window.innerHeight * 0.3
      ) {
        const id = section.id;
        if (id && this.validSections.has(id)) {
          this.lastEmitted = id;
          this.ngZone.run(() => this.sectionChange.emit(id));
          break;
        }
      }
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
