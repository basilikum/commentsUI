import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAndWhenComponent } from './who-and-when.component';

describe('WhoAndWhenComponent', () => {
  let component: WhoAndWhenComponent;
  let fixture: ComponentFixture<WhoAndWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAndWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAndWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
