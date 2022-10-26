import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDefaultComponent } from './post-default.component';

describe('PostDefaultComponent', () => {
  let component: PostDefaultComponent;
  let fixture: ComponentFixture<PostDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
