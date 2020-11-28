import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DDUKGYComponent } from './ddukgy.component';

describe('DDUKGYComponent', () => {
  let component: DDUKGYComponent;
  let fixture: ComponentFixture<DDUKGYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DDUKGYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DDUKGYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
