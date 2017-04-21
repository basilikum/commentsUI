import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQueryParamComponent } from './select-query-param.component';

describe('SelectQueryParamComponent', () => {
  let component: SelectQueryParamComponent;
  let fixture: ComponentFixture<SelectQueryParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectQueryParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQueryParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
