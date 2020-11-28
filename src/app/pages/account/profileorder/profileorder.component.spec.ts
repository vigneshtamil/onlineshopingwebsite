import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileorderComponent } from './profileorder.component';

describe('ProfileorderComponent', () => {
  let component: ProfileorderComponent;
  let fixture: ComponentFixture<ProfileorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
