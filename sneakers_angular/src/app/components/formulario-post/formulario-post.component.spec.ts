import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPostComponent } from './formulario-post.component';

describe('FormularioPostComponent', () => {
  let component: FormularioPostComponent;
  let fixture: ComponentFixture<FormularioPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
