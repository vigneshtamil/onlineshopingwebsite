import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNULMComponent } from './tnulm.component';

describe('TNULMComponent', () => {
  let component: TNULMComponent;
  let fixture: ComponentFixture<TNULMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNULMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNULMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
