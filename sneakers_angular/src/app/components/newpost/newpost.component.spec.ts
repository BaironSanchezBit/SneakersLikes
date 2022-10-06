import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpostComponent } from './newpost.component';

describe('NewpostComponent', () => {
  let component: NewpostComponent;
  let fixture: ComponentFixture<NewpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
