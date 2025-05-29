import { CommonModule } from '@angular/common';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  stats = [
    {
      icon: 'fas fa-smile',
      label: 'Satisfied Clients',
      current: 0,
      _value: 100,
    },
    {
      icon: 'fas fa-file-alt',
      label: 'Projects Delivered',
      current: 0,
      _value: 50,
    },
    {
      icon: 'fas fa-headset',
      label: 'Hours of Support',
      current: 0,
      _value: 2000,
    },
    {
      icon: 'fas fa-users',
      label: 'Expert Team Members',
      current: 0,
      _value: 20,
    },
  ];

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.stats.forEach((stat, index) => {
      this.animateValue(index, stat._value, 10);
    });
  }

  private animateValue(index: number, end: number, duration: number): void {
    const range = end;
    const stepTime = Math.max(Math.floor(duration / range), 10);
    let current = 0;

    const timer = setInterval(() => {
      current++;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      this.zone.run(() => {
        this.stats[index].current = current;
      });
    }, stepTime);
  }
}
