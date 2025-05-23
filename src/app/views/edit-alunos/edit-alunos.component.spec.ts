import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlunosComponent } from './edit-alunos.component';

describe('EditAlunosComponent', () => {
  let component: EditAlunosComponent;
  let fixture: ComponentFixture<EditAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAlunosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
