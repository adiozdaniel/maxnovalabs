import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() titlePartOne = '';
  @Input() titlePartTwo = '';
  @Input() subtitle = '';
  @Input() alignment: 'left' | 'center' | 'right' = 'center';
}
