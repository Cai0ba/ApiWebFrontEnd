import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-funcionario',
  templateUrl: './tela-professor.component.html',
  styleUrls: ['./tela-professor.component.css']
})
export class TelaFuncionarioComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit(): void {

  }
  public redirectToMod(){
    this.rota.navigate(['/modalidades']);
  }
  public redirectToAluno(){
    this.rota.navigate(['/alunos']);
  }


}
