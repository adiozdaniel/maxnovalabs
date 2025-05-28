import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats = [
    { icon: 'fas fa-smile', value: 100, label: 'Satisfied Clients' },
    { icon: 'fas fa-file-alt', value: 50, label: 'Projects Delivered' },
    { icon: 'fas fa-headset', value: 2000, label: 'Hours of Support' },
    { icon: 'fas fa-users', value: 20, label: 'Expert Team Members' },
  ];

  ngOnInit(): void {
    // This could be replaced with a service call to fetch real data
    // For now, we are using static data defined in the stats array
  }
}
