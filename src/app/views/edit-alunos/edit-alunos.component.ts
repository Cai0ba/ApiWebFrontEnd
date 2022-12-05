import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-alunos',
  templateUrl: './edit-alunos.component.html',
  styleUrls: ['./edit-alunos.component.css']
})
export class EditAlunosComponent implements OnInit {
  public aluno: Aluno = new Aluno();

  constructor(
    private service: AlunoService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.service.get(id).subscribe((aluno: Aluno) => {
      this.aluno = aluno;
    });
  }
  public update() {
    this.service.update(this.aluno).subscribe((resp) => {
      console.log("teste")
      this.rota.navigate(['/alunos']);
    });
  }
}
