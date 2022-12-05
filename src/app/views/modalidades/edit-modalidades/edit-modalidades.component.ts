import { Router, ActivatedRoute } from '@angular/router';
import { ModalidadesService } from './../../../services/modalidades.service';
import { Modalidades } from 'src/app/models/modalidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modalidades',
  templateUrl: './edit-modalidades.component.html',
  styleUrls: ['./edit-modalidades.component.css'],
})
export class EditModalidadesComponent implements OnInit {
  public modalidade: Modalidades = new Modalidades();

  constructor(
    private service: ModalidadesService,
    private rota: Router,
    private rotaAtiva: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.service.get(id).subscribe((modalidade: Modalidades) => {
      this.modalidade = modalidade;
    });
  }
  public update() {
    this.service.update(this.modalidade).subscribe((resp) => {
      console.log("teste")
      this.rota.navigate(['/modalidades']);
    });
  }
}
