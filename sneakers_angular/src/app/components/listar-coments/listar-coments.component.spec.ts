import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComentsComponent } from './listar-coments.component';

describe('ListarComentsComponent', () => {
  let component: ListarComentsComponent;
  let fixture: ComponentFixture<ListarComentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarComentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
