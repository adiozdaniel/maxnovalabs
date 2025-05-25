import { Component } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainNavComponent } from './main-nav/main-nav.component';

@Component({
  selector: 'app-header',
  imports: [TopBarComponent, MainNavComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
