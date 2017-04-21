import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRequiredModalComponent } from './login-required-modal.component';

describe('LoginRequiredModalComponent', () => {
  let component: LoginRequiredModalComponent;
  let fixture: ComponentFixture<LoginRequiredModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRequiredModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRequiredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
