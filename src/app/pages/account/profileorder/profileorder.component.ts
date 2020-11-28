import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profileorder',
  templateUrl: './profileorder.component.html',
  styleUrls: ['./profileorder.component.scss']
})
export class ProfileorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
}
