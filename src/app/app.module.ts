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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    HomeComponent,
    RegisterComponent,
    LoginProfessorComponent,
    TelaFuncionarioComponent
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
