import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteHandleComponent } from './vote-handle.component';

describe('VoteHandleComponent', () => {
  let component: VoteHandleComponent;
  let fixture: ComponentFixture<VoteHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
