import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginLinkComponent } from './user-login-link.component';

describe('UserLoginLinkComponent', () => {
  let component: UserLoginLinkComponent;
  let fixture: ComponentFixture<UserLoginLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserLoginLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
