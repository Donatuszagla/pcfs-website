import { Component, signal, OnInit, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';


@Component({
  selector: 'faith-home.component',
  imports: [MatSlideToggleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  readonly title = signal('Paradise City of Faith Sanctuary');

  backgroundImages: string[] = ["url('/home-bg.jpg')", "url('/David.png')", "url('/Seth.png')"];

  currentBgImage: string = this.backgroundImages[2];
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
      this.currentBgImage = this.backgroundImages[randomIndex];
    }, 15000); // change every 5 seconds
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private router = inject(Router);
  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
