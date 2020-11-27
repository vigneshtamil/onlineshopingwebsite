import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNSRLMComponent } from './tnsrlm.component';

describe('TNSRLMComponent', () => {
  let component: TNSRLMComponent;
  let fixture: ComponentFixture<TNSRLMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNSRLMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNSRLMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
