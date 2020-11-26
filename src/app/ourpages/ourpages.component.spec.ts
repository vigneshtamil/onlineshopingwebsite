import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpagesComponent } from './ourpages.component';

describe('OurpagesComponent', () => {
  let component: OurpagesComponent;
  let fixture: ComponentFixture<OurpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
