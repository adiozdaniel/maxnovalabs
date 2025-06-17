import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PreloaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  private timerId: any;

  ngOnInit(): void {
    // TODO: Replace with actual loading logic
    this.timerId = setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}
