import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [SectionTitleComponent, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  team = [
    {
      name: 'Ben Opiyo',
      role: 'Chief Executive Officer',
      image: 'img/team/member-1.jpg',
      social: [
        { icon: 'fab fa-x-twitter', url: '#' },
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
      ],
    },
    {
      name: 'Adioz Daniel',
      role: 'Lead Developer',
      image: 'img/team/member-2.jpg',
      social: [
        { icon: 'fab fa-x-twitter', url: '#' },
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
      ],
    },
    {
      name: 'Fena Olwal',
      role: 'Chief Engineer',
      image: 'img/team/member-3.jpg',
      social: [
        { icon: 'fab fa-x-twitter', url: '#' },
        { icon: 'fab fa-facebook-f', url: '#' },
        { icon: 'fab fa-instagram', url: '#' },
        { icon: 'fab fa-linkedin-in', url: '#' },
      ],
    },
  ];
}
