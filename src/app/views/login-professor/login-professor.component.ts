import { Professores } from '../../models/professor';
import { FuncionariosService } from '../../services/professor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css'],
})
export class LoginProfessorComponent implements OnInit {
  constructor(private service: FuncionariosService, private Router: Router) {}

  ngOnInit(): void {}

  getProfessores<Professores>() {
    return this.service.getFuncionarios();
  }
prof: Professores = new Professores;

  login() {
   console.log(this.prof.senha)
    if (this.prof.email == 'caio@gmail.com' && this.prof.senha == '123456') {
      this.Router.navigate(['telaFuncionario']);
    }
  }
}
