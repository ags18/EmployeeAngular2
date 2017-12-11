import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h2>Crises</h2>
  <p>Get your heroes here</p>

  <button routerLink="/sidekicks">Go to sidekicks</button>
`
})
export class CrisisListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
