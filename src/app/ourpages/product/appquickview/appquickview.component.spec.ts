import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppquickviewComponent } from './appquickview.component';

describe('AppquickviewComponent', () => {
  let component: AppquickviewComponent;
  let fixture: ComponentFixture<AppquickviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppquickviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppquickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
