import { Component, signal } from '@angular/core';

@Component({
  selector: 'faith-home.component',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly title = signal('Paradise City of Faith Sanctuary');
}
