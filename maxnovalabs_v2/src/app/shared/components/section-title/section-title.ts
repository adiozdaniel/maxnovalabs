import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  imports: [CommonModule],
  templateUrl: './section-title.html',
  styleUrls: ['./section-title.scss'],
})
export class SectionTitle {
  @Input() titlePartOne = '';
  @Input() titlePartTwo = '';
  @Input() subtitle = '';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
}
