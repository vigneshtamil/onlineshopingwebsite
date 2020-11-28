import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecartComponent } from './profilecart.component';

describe('ProfilecartComponent', () => {
  let component: ProfilecartComponent;
  let fixture: ComponentFixture<ProfilecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
