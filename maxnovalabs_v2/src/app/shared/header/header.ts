import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [TopBar, Navbar],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
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
