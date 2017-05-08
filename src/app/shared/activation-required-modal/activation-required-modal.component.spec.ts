import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationRequiredModalComponent } from './activation-required-modal.component';

describe('ActivationRequiredModalComponent', () => {
  let component: ActivationRequiredModalComponent;
  let fixture: ComponentFixture<ActivationRequiredModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationRequiredModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationRequiredModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
