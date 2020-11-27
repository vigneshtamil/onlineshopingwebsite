import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductboxOneComponent } from './productbox-one.component';

describe('ProductboxOneComponent', () => {
  let component: ProductboxOneComponent;
  let fixture: ComponentFixture<ProductboxOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductboxOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductboxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
