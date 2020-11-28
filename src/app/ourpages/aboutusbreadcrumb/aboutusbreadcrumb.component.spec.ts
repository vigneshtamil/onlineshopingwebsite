import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusbreadcrumbComponent } from './aboutusbreadcrumb.component';

describe('AboutusbreadcrumbComponent', () => {
  let component: AboutusbreadcrumbComponent;
  let fixture: ComponentFixture<AboutusbreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusbreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusbreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
