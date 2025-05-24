import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-logos-carousel',
  imports: [CommonModule],
  templateUrl: './client-logos-carousel.component.html',
  styleUrls: ['./client-logos-carousel.component.scss'],
})
export class ClientLogosCarouselComponent {
  @Input() logos: string[] = [];
}
