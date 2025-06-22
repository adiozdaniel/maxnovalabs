import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-pre-loader',
  imports: [CommonModule],
  templateUrl: './pre-loader.html',
  styleUrls: ['./pre-loader.scss'],
})
export class PreLoader implements OnInit, OnDestroy {
  isLoading = true;
  private timerId: any;

  ngOnInit(): void {
    // TODO: Replace with actual loading logic
    this.timerId = setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}
