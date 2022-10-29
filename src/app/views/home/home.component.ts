import { Component, OnInit } from '@angular/core';
import {ProfessorService} from 'src/app/services/professor.service'
import { Professores } from 'src/app/models/professor';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listaProfessores: Professores[] = [ ];

  constructor(private profServ:ProfessorService) { }

  ngOnInit(): void {
    this.profServ.getAll().subscribe((professores)=>{
      this.listaProfessores = professores
    });

  }

}
