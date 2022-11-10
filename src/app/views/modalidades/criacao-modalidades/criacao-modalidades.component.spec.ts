import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoModalidadesComponent } from './criacao-modalidades.component';

describe('CriacaoModalidadesComponent', () => {
  let component: CriacaoModalidadesComponent;
  let fixture: ComponentFixture<CriacaoModalidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoModalidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoModalidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
