import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  public grid: string = 'col-xl-3 col-md-6';
  public layoutView: string = 'grid-view';
  constructor() { }

  ngOnInit(): void {
  }

}
