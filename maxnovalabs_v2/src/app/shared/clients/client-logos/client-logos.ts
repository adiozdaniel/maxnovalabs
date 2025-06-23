import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-client-logos',
  imports: [CommonModule],
  templateUrl: './client-logos.html',
  styleUrls: ['./client-logos.scss'],
})
export class ClientLogos {
  @Input() logos: string[] = [];
}
