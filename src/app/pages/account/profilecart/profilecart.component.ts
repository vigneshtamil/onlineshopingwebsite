import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilecart',
  templateUrl: './profilecart.component.html',
  styleUrls: ['./profilecart.component.scss']
})
export class ProfilecartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
}
