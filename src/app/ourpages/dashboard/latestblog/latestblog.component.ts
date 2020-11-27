import { Component, Input, OnInit } from '@angular/core';
import { BlogSlider } from '../../../shared/data/slider';
import { ProductService } from '../../shared/product.service'
@Component({
  selector: 'app-latestblog',
  templateUrl: './latestblog.component.html',
  styleUrls: ['./latestblog.component.scss']
})
export class LatestblogComponent implements OnInit {
  @Input() blogs: any[] = [];
  constructor(public ProductService: ProductService) { }

  ngOnInit(): void {
  }
  public BlogSliderConfig: any = BlogSlider;
}
