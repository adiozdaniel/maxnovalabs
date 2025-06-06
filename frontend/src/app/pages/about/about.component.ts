import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../shared/section-title/section-title.component";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [SectionTitleComponent],
})
export class AboutComponent {}
