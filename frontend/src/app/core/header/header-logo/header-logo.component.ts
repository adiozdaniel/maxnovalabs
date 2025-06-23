import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
  ViewChild,
  Inject,
  PLATFORM_ID,
  AfterViewInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.component.html',
  styleUrls: ['./header-logo.component.scss'],
})
export class HeaderLogoComponent implements OnInit, AfterViewInit {
  @ViewChild('svgElement', { static: true })
  svgElement!: ElementRef<SVGSVGElement>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.svgElement) {
      this.renderer.setStyle(
        this.svgElement.nativeElement,
        'position',
        'absolute'
      );
      this.renderer.setStyle(this.svgElement.nativeElement, 'top', '-40px');
      this.renderer.setStyle(this.svgElement.nativeElement, 'left', '0');
      this.renderer.setStyle(
        this.svgElement.nativeElement,
        'transition',
        'top 0.3s ease'
      );
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!isPlatformBrowser(this.platformId) || !this.svgElement) {
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = 44;
    const newTop = scrollY > threshold ? '-35px' : '-40px';

    this.renderer.setStyle(this.svgElement.nativeElement, 'top', newTop);
  }
}
