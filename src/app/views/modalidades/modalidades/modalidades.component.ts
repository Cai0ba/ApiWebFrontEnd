import { Router } from '@angular/router';
import { ModalidadesService } from './../../../services/modalidades.service';
import { Component, OnInit } from '@angular/core';
import { Modalidades } from 'src/app/models/modalidades';
@Component({
  selector: 'app-modalidades',
  templateUrl: './modalidades.component.html',
  styleUrls: ['./modalidades.component.css'],
})
export class ModalidadesComponent implements OnInit {
  public listModalidade: Modalidades[] = [];
  public modalidade: Modalidades = new Modalidades();
  constructor(private service: ModalidadesService, private rota: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((modalidades) => {
      this.listModalidade = modalidades;
    });
  }
  public delete(id:number) {
    this.service.delete(id).subscribe((resposta) => {
      window.location.reload()
    });
  }

}
