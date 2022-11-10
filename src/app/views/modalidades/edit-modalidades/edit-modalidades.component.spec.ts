import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalidadesComponent } from './edit-modalidades.component';

describe('EditModalidadesComponent', () => {
  let component: EditModalidadesComponent;
  let fixture: ComponentFixture<EditModalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditModalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
