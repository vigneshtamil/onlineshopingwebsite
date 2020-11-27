import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallorderlistComponent } from './overallorderlist.component';

describe('OverallorderlistComponent', () => {
  let component: OverallorderlistComponent;
  let fixture: ComponentFixture<OverallorderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallorderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallorderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
