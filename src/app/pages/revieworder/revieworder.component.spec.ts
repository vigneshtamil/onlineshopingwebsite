import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieworderComponent } from './revieworder.component';

describe('RevieworderComponent', () => {
  let component: RevieworderComponent;
  let fixture: ComponentFixture<RevieworderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevieworderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevieworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
