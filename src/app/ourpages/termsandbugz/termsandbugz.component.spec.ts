import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandbugzComponent } from './termsandbugz.component';

describe('TermsandbugzComponent', () => {
  let component: TermsandbugzComponent;
  let fixture: ComponentFixture<TermsandbugzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandbugzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandbugzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
