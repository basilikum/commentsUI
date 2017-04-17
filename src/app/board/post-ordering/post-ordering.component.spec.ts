import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrderingComponent } from './post-ordering.component';

describe('PostOrderingComponent', () => {
  let component: PostOrderingComponent;
  let fixture: ComponentFixture<PostOrderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOrderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
