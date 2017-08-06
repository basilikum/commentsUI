import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangeAuthComponent } from './user-change-auth.component';

describe('UserChangeAuthComponent', () => {
  let component: UserChangeAuthComponent;
  let fixture: ComponentFixture<UserChangeAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserChangeAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChangeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
