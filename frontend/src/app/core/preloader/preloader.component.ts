import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss'],
  imports: [CommonModule],
})
export class PreloaderComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // TODO: Replace with actual loading logic
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
