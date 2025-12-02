import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'faith-home.component',
  imports: [MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly title = signal('Paradise City of Faith Sanctuary');
}
