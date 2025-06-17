import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioItem } from '../models/portfolio-item.model';

@Component({
  selector: 'app-portfolio-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-grid.component.html',
  styleUrls: ['./portfolio-grid.component.scss'],
})
export class PortfolioGridComponent {
  @Input() items: PortfolioItem[] = [];
  @Input() categories: string[] = [];

  selectedCategory: string = 'All';

  get filteredItems(): PortfolioItem[] {
    if (this.selectedCategory === 'All') return this.items;
    return this.items.filter((item) =>
      item.categories.includes(this.selectedCategory)
    );
  }

  get allCategories(): string[] {
    return ['All', ...this.categories];
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
