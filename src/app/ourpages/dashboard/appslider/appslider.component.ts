import { Component, OnInit, Input } from '@angular/core';
import { HomeSlider } from '../../../shared/data/slider';
@Component({
  selector: 'app-appslider',
  templateUrl: './appslider.component.html',
  styleUrls: ['./appslider.component.scss']
})
export class AppsliderComponent implements OnInit {
  @Input() sliders: any[];
  @Input() class: string;
  @Input() textClass: string;
  @Input() category: string;
  @Input() buttonText: string;
  @Input() buttonClass: string;
  constructor() { }
  public HomeSliderConfig: any = HomeSlider;
  ngOnInit(): void {
  }

}
