import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioAdminComponent } from './comentario-admin.component';

describe('ComentarioAdminComponent', () => {
  let component: ComentarioAdminComponent;
  let fixture: ComponentFixture<ComentarioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
