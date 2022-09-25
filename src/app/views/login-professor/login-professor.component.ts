import { Professores } from './../../models/professores';
import { FuncionariosService } from './../../services/funcionarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-professor',
  templateUrl: './login-professor.component.html',
  styleUrls: ['./login-professor.component.css']
})
export class LoginProfessorComponent implements OnInit {

  constructor(private service : FuncionariosService, private Router: Router) { }

  ngOnInit(): void {
  }

 getProfessores<Professores>() {
 return this.service.getFuncionarios();
 }
 email: string = '';
 senha: string = '';


  login(){
   console.log(this.senha)
    if(this.email == 'caio@gmail.com'&& this.senha == '123456'){
    this.Router.navigate(['telaFuncionario'])

    }


  }

}


