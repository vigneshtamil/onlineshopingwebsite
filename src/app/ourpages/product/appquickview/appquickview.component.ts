import { Component, Inject, Input, OnInit, PLATFORM_ID, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appquickview',
  templateUrl: './appquickview.component.html',
  styleUrls: ['./appquickview.component.scss']
})
export class AppquickviewComponent implements OnInit {
  @Input() product;
  @ViewChild("quickView", { static: false }) QuickView: TemplateRef<any>;
  public closeResult: string;
  public ImageSrc: string;
  public counter: number = 1;
  public modalOpen: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  private router: Router, private modalService: NgbModal,) { }

  ngOnInit(): void {
  }

}
