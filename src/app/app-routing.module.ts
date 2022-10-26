import { TelaFuncionarioComponent } from './views/tela-professor/tela-professor.component';
import { LoginProfessorComponent } from './views/login-professor/login-professor.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { LoginAlunoComponent } from './views/login-aluno/login-aluno.component';
import { RegisterComponent } from './views/register/register.component';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
const routes: Routes = [

{path: "sobre", component: SobreComponent },
{path: "home", component: HomeComponent },
{path: "loginAluno", component: LoginAlunoComponent },
{path: "loginProfessor", component: LoginProfessorComponent },
{path: "telaFuncionario", component: TelaFuncionarioComponent },
{path: '', redirectTo: "home", pathMatch:'full' },
{path: "register", component: RegisterComponent},
{path: "esqueceu-senha", component: EsqueceuSenhaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 