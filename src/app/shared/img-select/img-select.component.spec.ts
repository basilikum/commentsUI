import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSelectComponent } from './img-select.component';

describe('ImgUploadComponent', () => {
  let component: ImgSelectComponent;
  let fixture: ComponentFixture<ImgSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
