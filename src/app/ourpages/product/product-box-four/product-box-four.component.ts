import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productbox-four',
  templateUrl: './product-box-four.component.html',
  styleUrls: ['./product-box-four.component.scss']
})
export class ProductBoxFourComponent implements OnInit {
  cartModal: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
