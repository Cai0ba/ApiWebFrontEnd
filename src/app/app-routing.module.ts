import { AlunosComponent } from './views/alunos/alunos.component';
import { EditAlunosComponent } from './views/edit-alunos/edit-alunos.component';
import { EditModalidadesComponent } from './views/modalidades/edit-modalidades/edit-modalidades.component';
import { CriacaoModalidadesComponent } from './views/modalidades/criacao-modalidades/criacao-modalidades.component';
import { TelaFuncionarioComponent } from './views/tela-professor/tela-professor.component';
import { LoginProfessorComponent } from './views/login-professor/login-professor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { LoginAlunoComponent } from './views/login-aluno/login-aluno.component';
import { RegisterComponent } from './views/register/register.component';
import { EsqueceuSenhaComponent } from './views/esqueceu-senha/esqueceu-senha.component';
import { NovaSenhaComponent } from './views/nova-senha/nova-senha.component';
import { ModalidadesComponent } from './views/modalidades/modalidades/modalidades.component';
import { ProfessorGuard } from './guards/professor-guard.service';
import { AlunoGuard } from './guards/aluno-guard.service';
import { TelaAlunoComponent } from './views/tela-aluno/tela-aluno.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'sobre', component: SobreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'loginAluno', component: LoginAlunoComponent },
  { path: 'loginProfessor', component: LoginProfessorComponent },
  { path: 'tela-professor', component: TelaFuncionarioComponent ,canActivate: [ProfessorGuard]},
  { path: 'tela-aluno', component: TelaAlunoComponent ,canActivate: [AlunoGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
  { path: 'nova-senha', component: NovaSenhaComponent },
  { path: 'modalidades', component: ModalidadesComponent, canActivate: [ProfessorGuard]},
  { path: 'criar-modalidade', component: CriacaoModalidadesComponent, canActivate: [ProfessorGuard] },
  { path: 'editar-modalidade/:id', component: EditModalidadesComponent, canActivate: [ProfessorGuard] },
  { path: 'editar-alunos/:id', component: EditAlunosComponent, canActivate: [ProfessorGuard] },
  { path: 'alunos', component: AlunosComponent, canActivate: [ProfessorGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
