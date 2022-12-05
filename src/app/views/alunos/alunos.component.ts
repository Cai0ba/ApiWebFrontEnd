import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public listAluno: Aluno[] = [];
  public aluno: Aluno = new Aluno();
  constructor(private service: AlunoService, private rota: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((alunos) => {
      this.listAluno = alunos;
    });
  }
  public delete(id:number) {
    this.service.delete(id).subscribe((resposta) => {
      window.location.reload()
    });
  }

}
