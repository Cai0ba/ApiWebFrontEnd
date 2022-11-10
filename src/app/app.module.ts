import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SobreComponent } from './views/sobre/sobre.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginProfessorComponent } from './views/login-professor/login-professor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TelaFuncionarioComponent } from './views/tela-professor/tela-professor.component';
import { LoginAlunoComponent } from './views/login-aluno/login-aluno.component';
import { EsqueceuSenhaComponent } from './views/esqueceu-senha/esqueceu-senha.component';
import { NovaSenhaComponent } from './views/nova-senha/nova-senha.component';
import { EditModalidadesComponent } from './views/modalidades/edit-modalidades/edit-modalidades.component';
import { ModalidadesComponent } from './views/modalidades/modalidades/modalidades.component';
import { CriacaoModalidadesComponent } from './views/modalidades/criacao-modalidades/criacao-modalidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    HomeComponent,
    RegisterComponent,
    LoginProfessorComponent,
    TelaFuncionarioComponent,
    EsqueceuSenhaComponent,
    NovaSenhaComponent,
    EditModalidadesComponent,
    ModalidadesComponent,
    LoginAlunoComponent,
    CriacaoModalidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
