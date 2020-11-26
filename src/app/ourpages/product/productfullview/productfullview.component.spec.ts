import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductfullviewComponent } from './productfullview.component';

describe('ProductfullviewComponent', () => {
  let component: ProductfullviewComponent;
  let fixture: ComponentFixture<ProductfullviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductfullviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductfullviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
