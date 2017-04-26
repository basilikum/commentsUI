import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccessModalComponent } from './register-success-modal.component';

describe('RegisterSuccessModalComponent', () => {
  let component: RegisterSuccessModalComponent;
  let fixture: ComponentFixture<RegisterSuccessModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSuccessModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
