import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxFourComponent } from './product-box-four.component';

describe('ProductBoxFourComponent', () => {
  let component: ProductBoxFourComponent;
  let fixture: ComponentFixture<ProductBoxFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoxFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
