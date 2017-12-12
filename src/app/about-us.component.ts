import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <h2>About Us</h2><br>
  <h4><i>Get your Employee Management solution here</i></h4>
  <p>Add new employees</p>
  <p>Delete an employee</p>
  <p>Edit existing employee</p>
  <p>Filter employee as you type</p>
  <p>Sort employees based on table headers</p>
`
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
