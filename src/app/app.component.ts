import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/employees" routerLinkActive="active">Employees</a>
  </nav>
  <router-outlet></router-outlet>
  </div>
`
})
export class AppComponent {
  title = 'app';
}
