import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header-logo',
  templateUrl: './header-logo.html',
  styleUrls: ['./header-logo.scss'],
})
export class HeaderLogo implements OnInit, AfterViewInit {
  @ViewChild('svgElement', { static: true })
  svgElement!: ElementRef<SVGSVGElement>;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'position', 'relative');
  }

  ngAfterViewInit() {
    if (this.svgElement) {
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
    if (!this.svgElement) {
      return;
    }

    const scrollY = window.scrollY || window.pageYOffset;
    const threshold = 44;
    const newTop = scrollY > threshold ? '-35px' : '-40px';

    this.renderer.setStyle(this.svgElement.nativeElement, 'top', newTop);
  }
}
