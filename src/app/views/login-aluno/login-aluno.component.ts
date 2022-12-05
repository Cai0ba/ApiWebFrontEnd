import { Aluno } from 'src/app/models/aluno';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login-aluno.component.html',
  styleUrls: ['./login-aluno.component.css'],
})
export class LoginAlunoComponent implements OnInit {
  public email: string = '';
  public senha: string = '';
  constructor(private auth: AuthService, private Router: Router) {}

  ngOnInit(): void {}

  public login() {
    this.auth.autenticarAluno(this.email, this.senha);
  }
}
