import { transition, animate, style } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar.component/navbar.component';

@Component({
  selector: 'faith-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pcfs-web');

  // animation: [
  //   trigger('fadeInAnimation', 
  //   transition(':enter', [
  //     style({ opacity: 0}), animate('400ms', style({ opacity: 1}))
  //   ])
  //   transition(':leave', [
  //    animate('400ms', style({ opacity: 0}))
  //   ])
  //   )
  // ]
}
