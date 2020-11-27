import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestblogComponent } from './latestblog.component';

describe('LatestblogComponent', () => {
  let component: LatestblogComponent;
  let fixture: ComponentFixture<LatestblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
