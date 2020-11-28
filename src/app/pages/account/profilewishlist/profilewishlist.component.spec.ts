import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilewishlistComponent } from './profilewishlist.component';

describe('ProfilewishlistComponent', () => {
  let component: ProfilewishlistComponent;
  let fixture: ComponentFixture<ProfilewishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilewishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilewishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
