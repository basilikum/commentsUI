import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeSocialComponent } from './finalize-social.component';

describe('FinalizeSocialComponent', () => {
  let component: FinalizeSocialComponent;
  let fixture: ComponentFixture<FinalizeSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
