import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appgrid',
  templateUrl: './appgrid.component.html',
  styleUrls: ['./appgrid.component.scss']
})
export class AppgridComponent implements OnInit {
  @Input() products = [];
  @Input() paginate: any = {};
  @Input() layoutView: string = 'grid-view';
  @Input() sortBy: string;

  @Output() setGrid: EventEmitter<any> = new EventEmitter<any>();
  @Output() setLayout: EventEmitter<any> = new EventEmitter<any>();
  @Output() sortedBy: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
setGridLayout(value: string) {
    this.setGrid.emit(value);  // Set Grid Size
  }

  setLayoutView(value: string) {
    this.layoutView = value
    this.setLayout.emit(value); // Set layout view
  }

  sorting(event) {
    this.sortedBy.emit(event.target.value)
  }
}
