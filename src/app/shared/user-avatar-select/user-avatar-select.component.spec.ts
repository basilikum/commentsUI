import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAvatarSelectComponent } from './user-avatar-select.component';

describe('UserAvatarSelectComponent', () => {
  let component: UserAvatarSelectComponent;
  let fixture: ComponentFixture<UserAvatarSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAvatarSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAvatarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
