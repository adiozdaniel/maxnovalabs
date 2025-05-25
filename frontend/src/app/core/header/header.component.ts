import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  selector: 'app-header',
  imports: [TopBarComponent, MainNavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @ViewChild('mainNav', { static: true, read: ElementRef })
  mainNav!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const threshold = 44;

    if (scrollY > threshold) {
      this.renderer.addClass(this.mainNav.nativeElement, 'fixed');
    } else {
      this.renderer.removeClass(this.mainNav.nativeElement, 'fixed');
    }
  }
}
