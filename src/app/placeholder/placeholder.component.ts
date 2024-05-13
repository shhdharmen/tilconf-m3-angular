import { Component } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: 'placeholder.component.html',
  standalone: true,
})
export class PlaceholderComponent {
  readonly links = [
    {
      title: 'Learn from deck',
      link: 'https://github.com/shhdharmen/tilconf-m3-angular/tree/main',
    },
    { title: 'Angular Material Dev', link: 'https://angular-material.dev' },
    { title: 'Read Blogs', link: 'https://blog.shhdharmen.me/' },
    { title: 'Angular Docs', link: 'https://angular.dev' },
    {
      title: 'Angular Material Docs',
      link: 'https://material.angular.io',
    },
    {
      title: 'Learn Material Design',
      link: 'https://material.io',
    },
  ];
}
