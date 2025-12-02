import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'faith-about.component',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  private activatedRoute = inject(ActivatedRoute);

  routeComponent = this.activatedRoute.snapshot.url[0]?.path;
}
