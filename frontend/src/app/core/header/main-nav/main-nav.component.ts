import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  imports: [CommonModule],
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  isDark = false;

  toggleTheme() {
    this.isDark = !this.isDark;
    const host = document.body;
    if (this.isDark) {
      host.classList.add('dark-theme');
    } else {
      host.classList.remove('dark-theme');
    }
  }
}
