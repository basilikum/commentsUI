import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDeleteConfirmModalComponent } from './post-delete-confirm-modal.component';

describe('PostDeleteConfirmModalComponent', () => {
  let component: PostDeleteConfirmModalComponent;
  let fixture: ComponentFixture<PostDeleteConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDeleteConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDeleteConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
