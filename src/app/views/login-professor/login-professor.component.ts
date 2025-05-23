import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css'],
})
export class LoginProfessorComponent implements OnInit {
  public email: string = '';
  public senha: string = '';
  constructor(private auth: AuthService, private Router: Router) {}

  ngOnInit(): void {}

  public login() {
    this.auth.autenticarProf(this.email, this.senha);
  }
}
