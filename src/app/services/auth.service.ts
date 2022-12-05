import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ProfessorService } from './professor.service';
import { AlunoService } from './aluno.service';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private autenticado: boolean = false;

    constructor(private rota: Router,
                private profService: ProfessorService,
                private alunoService: AlunoService) { }

    public autenticarAluno(email: string, senha: string) {
        if (email && senha) {

            this.alunoService.buscarAluno(email, senha)
                            .subscribe((resposta: any[])=>{
                const [usuario] = resposta;

                if (usuario) {
                    this.autenticado = true;
                    this.rota.navigate(['/tela-aluno']);
                } else {
                    this.autenticado = false;
                    Swal.fire({
                      icon: 'error',
                      title: 'OOPS!',
                      text: 'Email ou senha incorreto(s)',
                    })
                }

            });

        } else {
            this.autenticado = false;
        }
    }

    public autenticarProf(email: string, senha: string) {
      if (email && senha) {

          this.profService.buscarProfessor(email, senha)
                          .subscribe((resposta: any[])=>{
              const [usuario] = resposta;

              if (usuario) {
                  this.autenticado = true;
                  this.rota.navigate(['/tela-professor']);
              } else {
                  this.autenticado = false;
                  Swal.fire({
                    icon: 'error',
                    title: 'OOPS!',
                    text: 'Email ou senha incorreto(s)',
                  })
              }

          });

      } else {
          this.autenticado = false;
      }
  }


    public isAutenticado() {
        return this.autenticado;
    }

    public setAutenticado(valor: boolean) {
        this.autenticado = valor;
    }
}
