import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutusbreadcrumb',
  templateUrl: './aboutusbreadcrumb.component.html',
  styleUrls: ['./aboutusbreadcrumb.component.scss']
})
export class AboutusbreadcrumbComponent implements OnInit {
  @Input() title : string;
  @Input() breadcrumb : string;

  constructor() { }

  ngOnInit(): void {
  }

}
