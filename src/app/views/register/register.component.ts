import { AlunoService } from './../../services/aluno.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rota: Router, private service : AlunoService) { }
public aluno : Aluno = new Aluno()
  ngOnInit(): void {
  }
  public criar() {
    this.service.add(this.aluno).subscribe((resposta)=>{
      this.rota.navigate(['/home']);
      Swal.fire({
        icon: 'success',
        title: 'Parabéns',
        text: 'Conta criada com sucesso!',
      })
    });
  }
}
