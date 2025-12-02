import { IconsModule } from './../../../assets/icons.module';
import { Component, signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'faith-navbar',
  imports: [IconsModule, MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  readonly title = signal('Paradise City of Faith Sanctuary');
}
