import { IconsModule } from './../../../assets/icons.module';
import { Component, inject, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'faith-navbar',
  imports: [RouterLink, IconsModule, MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  readonly title = signal('Paradise City of Faith Sanctuary');

  private router = inject(Router);

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
  navigateToBranches() {
    this.router.navigate(['/branches']);
  }
  navigateToMedia() {
    this.router.navigate(['/media']);
  }
  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}
