import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlaceholderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  
}
