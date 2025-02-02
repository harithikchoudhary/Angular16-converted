import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isCollapsed = true;

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return route === this.router.url;
  }
}
