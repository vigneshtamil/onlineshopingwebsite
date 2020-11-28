import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilewishlist',
  templateUrl: './profilewishlist.component.html',
  styleUrls: ['./profilewishlist.component.scss']
})
export class ProfilewishlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public openDashboard: boolean = false;

  ToggleDashboard() {
    this.openDashboard = !this.openDashboard;
  }
}
